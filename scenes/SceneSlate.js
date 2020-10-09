import * as React from "react";
import * as System from "~/components/system";
import * as Actions from "~/common/actions";
import * as Constants from "~/common/constants";
import * as Validations from "~/common/validations";
import * as SVG from "~/common/svg";
import * as Strings from "~/common/strings";
import * as Window from "~/common/window";

import { css } from "@emotion/react";
import { ProcessedText } from "~/components/system/components/Typography";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "~/components/system/components/Buttons";
import { dispatchCustomEvent } from "~/common/custom-events";

import ScenePage from "~/components/core/ScenePage";
import ScenePageHeader from "~/components/core/ScenePageHeader";
import Slate, { generateLayout } from "~/components/core/Slate";
import SlateMediaObject from "~/components/core/SlateMediaObject";
import CircleButtonGray from "~/components/core/CircleButtonGray";
import EmptyState from "~/components/core/EmptyState";

const STYLES_ICONS = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const STYLES_ACTIONS = css`
  @media (max-width: ${Constants.sizes.mobile}px) {
    padding-left: 24px;
  }
`;

const STYLES_USERNAME = css`
  cursor: pointer;

  :hover {
    color: ${Constants.system.brand};
  }
`;

const STYLES_MOBILE_HIDDEN = css`
  @media (max-width: ${Constants.sizes.mobile}px) {
    display: none;
  }
`;

const STYLES_MOBILE_ONLY = css`
  @media (min-width: ${Constants.sizes.mobile}px) {
    display: none;
  }
`;

const moveIndex = (set, fromIndex, toIndex) => {
  const element = set[fromIndex];
  set.splice(fromIndex, 1);
  set.splice(toIndex, 0, element);

  return set;
};

const setStateData = (source) => {
  return {
    objects: source.data.objects,
    layouts: source.data.layouts
      ? source.data.layouts
      : { lg: generateLayout(source.data.objects) },
  };
};

let isMounted = false;

export default class SceneSlate extends React.Component {
  _timeout = null;
  _remoteLock = false;

  state = {
    ...setStateData(this.props.current, this.props.viewer),
    loading: false,
    saving: "IDLE",
    editing: this.props.current.data.ownerId === this.props.viewer.id,
    followLoading: false,
  };

  // NOTE(jim):
  // The purpose of this is to update the Scene appropriately when
  // it changes but isn't mounted.
  componentDidUpdate(prevProps) {
    if (prevProps.current.id !== this.props.current.id) {
      this.setState({
        ...setStateData(this.props.current, this.props.viewer),
        loading: false,
        saving: "IDLE",
        editing: this.props.current.data.ownerId === this.props.viewer.id,
      });

      this._handleUpdateCarousel({
        objects: this.props.current.data.objects,
        editing: this.state.editing,
      });
    }
  }

  componentDidMount() {
    if (isMounted) {
      return false;
    }

    isMounted = true;

    this._handleUpdateCarousel(this.state);
    window.addEventListener(
      "remote-update-slate-screen",
      this._handleRemoteUpdate
    );
    window.addEventListener(
      "remote-delete-object",
      this._handleRemoteDeleteObject
    );
    window.addEventListener(
      "remote-object-update",
      this._handleRemoteSaveObject
    );
  }

  componentWillUnmount() {
    isMounted = false;

    window.removeEventListener(
      "remote-update-slate-screen",
      this._handleRemoteUpdate
    );
    window.removeEventListener(
      "remote-delete-object",
      this._handleRemoteDeleteObject
    );
    window.removeEventListener(
      "remote-object-update",
      this._handleRemoteSaveObject
    );
  }

  _handleRemoteUpdate = async ({ detail }) => {
    if (!this._remoteLock) {
      this._remoteLock = true;
      const response = await Actions.getSlateById({
        id: this.props.current.id,
      });

      if (!response) {
        dispatchCustomEvent({
          name: "create-alert",
          detail: {
            alert: {
              message:
                "We're having trouble refreshing right now. Please try again later",
            },
          },
        });
        this._remoteLock = false;
        return;
      }

      if (response.error) {
        dispatchCustomEvent({
          name: "create-alert",
          detail: {
            alert: {
              decorator: response.error,
            },
          },
        });
        this._remoteLock = false;
        return;
      }

      this.setState({ layouts: null, objects: null });

      const { slate } = response;

      await this._handleSave(null, slate.data.objects, slate.data.layouts);
      this._remoteLock = false;
    }
  };

  _handleFollow = () => {
    this.setState({ followLoading: true }, async () => {
      let response = await Actions.createSubscription({
        slateId: this.props.current.id,
      });
      await this.props.onRehydrate();
      this.setState({ followLoading: false });
    });
  };

  _handleChangeLayout = async (layout, layouts) => {
    this.setState({ layouts, saving: "IDLE" });
  };

  _handleSaveLayout = async () => {
    await this._handleSave(null, null, this.state.layouts);
  };

  _handleMoveIndex = async (from, to) => {
    const objects = moveIndex(this.state.objects, from.index, to.index);
    this.setState({ objects });
    await this._handleSave(null, objects);
  };

  _handleSave = async (e, objects, layouts) => {
    this.setState({ loading: true, saving: "SAVING" });

    const response = await Actions.updateSlate({
      id: this.props.current.id,
      data: {
        name: this.props.current.data.name,
        objects: objects ? objects : this.state.objects,
        layouts: layouts ? layouts : this.state.layouts,
      },
    });

    if (!response) {
      this.setState({ loading: false, saving: "ERROR" });
      System.dispatchCustomEvent({
        name: "create-alert",
        detail: {
          alert: {
            message:
              "We're having trouble connecting right now. Please try again later",
          },
        },
      });
    }

    if (response.error) {
      this.setState({ loading: false, saving: "ERROR" });
      System.dispatchCustomEvent({
        name: "create-alert",
        detail: { alert: { decorator: response.decorator } },
      });
    }

    await this.props.onRehydrate();

    this.setState({
      saving: "SAVED",
      layouts: layouts ? layouts : this.state.layouts,
      objects: objects ? objects : this.state.objects,
    });

    this._handleUpdateCarousel({
      objects: objects ? objects : this.state.objects,
      editing: this.state.editing,
    });
  };

  _handleRemoteSaveObject = async ({ detail }) => {
    const { object } = detail;

    System.dispatchCustomEvent({
      name: "state-global-carousel-loading",
      detail: { saving: true },
    });

    const objects = [...this.state.objects];
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === object.id) {
        objects[i] = object;
        break;
      }
    }

    await this._handleSave(null, objects);

    System.dispatchCustomEvent({
      name: "state-global-carousel-loading",
      detail: { saving: false },
    });
  };

  _handleUpdateCarousel = (state) => {
    const objects = [...state.objects];

    System.dispatchCustomEvent({
      name: "slate-global-create-carousel",
      detail: {
        slides: objects.map((each) => {
          // NOTE(jim):
          // This is a hack to catch this undefined case I don't want to track down yet.
          const url = each.url.replace("https://undefined", "https://");
          const cid = Strings.getCIDFromIPFS(url);
          const data = { ...each, cid, url };

          return {
            onDelete: () =>
              System.dispatchCustomEvent({
                name: "remote-delete-object",
                detail: { id: data.id },
              }),
            onObjectSave: (object) =>
              System.dispatchCustomEvent({
                name: "remote-object-update",
                detail: { object },
              }),
            id: data.id,
            cid,
            data,
            username: this.props.viewer.username,
            slatename: this.props.current.slatename,
            editing: this.state.editing,
            component: <SlateMediaObject key={each.id} data={data} />,
          };
        }),
      },
    });
  };

  _handleRemoteDeleteObject = async ({ detail }) => {
    const { id } = detail;

    System.dispatchCustomEvent({
      name: "state-global-carousel-loading",
      detail: { loading: true },
    });

    const objects = this.state.objects.filter((o, i) => {
      return o.id !== id;
    });

    // TODO(jim): This is a brute force way to handle this.
    const layouts = { lg: generateLayout(objects) };

    const response = await Actions.updateSlate({
      id: this.props.current.id,
      data: {
        name: this.props.current.data.name,
        objects,
        layouts,
      },
    });

    if (!response) {
      System.dispatchCustomEvent({
        name: "state-global-carousel-loading",
        detail: { loading: false },
      });
      System.dispatchCustomEvent({
        name: "create-alert",
        detail: {
          alert: {
            message:
              "We're having trouble connecting right now. Please try again later",
          },
        },
      });
    }

    if (response.error) {
      System.dispatchCustomEvent({
        name: "state-global-carousel-loading",
        detail: { loading: false },
      });
      System.dispatchCustomEvent({
        name: "create-alert",
        detail: { alert: { decorator: response.decorator } },
      });
    }

    this._handleUpdateCarousel({
      objects: response.slate.data.objects,
      editing: this.state.editing,
    });

    this.setState({
      objects: response.slate.data.objects,
      layouts: response.slate.data.layouts,
    });

    await this.props.onRehydrate();

    System.dispatchCustomEvent({
      name: "state-global-carousel-loading",
      detail: { loading: false },
    });
  };

  _handleSelect = (index) =>
    System.dispatchCustomEvent({
      name: "slate-global-open-carousel",
      detail: { index },
    });

  _handleAdd = async () => {
    await this.props.onAction({
      type: "SIDEBAR",
      value: "SIDEBAR_ADD_FILE_TO_BUCKET",
      data: this.props.current,
    });
    this._handleUpdateCarousel({
      objects: this.props.current.data.objects,
      editing: this.state.editing,
    });
  };

  _handleShowSettings = () => {
    return this.props.onAction({
      type: "SIDEBAR",
      value: "SIDEBAR_SINGLE_SLATE_SETTINGS",
      data: this.props.current,
    });
  };

  _handleSlateLink = async () => {
    //NOTE(martina): not needed if links only happen on your own slate (know your own username already)
    // const response = await Actions.getUsername({
    //   id: this.props.current.data.ownerId,
    // });
    // const username = response.data;

    return window.open(
      `/${this.props.viewer.username}/${this.props.current.slatename}`
    );
  };

  render() {
    const { id, user, data, slatename } = this.props.current;
    const { body = "" } = data;
    const { objects, layouts } = this.state;
    const isPublic = data.public;

    let following = !!this.props.viewer.subscriptions.filter((subscription) => {
      return subscription.target_slate_id === this.props.current.id;
    }).length;

    let onMobile = Validations.onMobile();
    let actions = this.state.editing ? (
      <span css={STYLES_ACTIONS}>
        <CircleButtonGray onClick={this._handleAdd} style={{ marginRight: 16 }}>
          <SVG.Plus height="16px" />
        </CircleButtonGray>
        {isPublic ? (
          <CircleButtonGray
            onClick={() => this._handleSlateLink()}
            style={{ marginRight: 16 }}
          >
            <SVG.DeepLink height="16px" />
          </CircleButtonGray>
        ) : null}
        <CircleButtonGray onClick={this._handleShowSettings}>
          <SVG.Settings height="16px" />
        </CircleButtonGray>
      </span>
    ) : (
      <div onClick={this._handleFollow}>
        {following ? (
          <ButtonSecondary
            transparent
            style={{ minWidth: 120, paddingLeft: 0 }}
            loading={this.state.followLoading}
          >
            Unfollow
          </ButtonSecondary>
        ) : (
          <ButtonPrimary
            transparent
            style={{ minWidth: 120, paddingLeft: 0 }}
            loading={this.state.followLoading}
          >
            Follow
          </ButtonPrimary>
        )}
      </div>
    );
    return (
      <ScenePage
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
        contentstyle={{ maxWidth: "1660px" }}
      >
        <ScenePageHeader
          style={{ padding: `0 24px 0 24px` }}
          title={
            user ? (
              <span>
                <span
                  onClick={() =>
                    this.props.onAction({
                      type: "NAVIGATE",
                      value: this.props.sceneId,
                      scene: "PUBLIC_PROFILE",
                      data: user,
                    })
                  }
                  css={STYLES_USERNAME}
                >
                  {user.username}
                </span>{" "}
                / {data.name}
              </span>
            ) : (
              data.name
            )
          }
          actions={<span css={STYLES_MOBILE_HIDDEN}>{actions}</span>}
        >
          <ProcessedText text={body} />
        </ScenePageHeader>
        <span css={STYLES_MOBILE_ONLY}>{actions}</span>
        {objects && objects.length ? (
          layouts ? (
            <Slate
              editing={onMobile ? false : this.state.editing}
              saving={this.state.saving}
              items={objects}
              layouts={layouts}
              onLayoutChange={this._handleChangeLayout}
              onLayoutSave={this._handleSaveLayout}
              onMoveIndex={this._handleMoveIndex}
              onSelect={this._handleSelect}
            />
          ) : null
        ) : this.state.editing ? (
          <div style={{ padding: "24px" }}>
            <EmptyState>
              <div css={STYLES_ICONS}>
                <SVG.Sound height="24px" style={{ margin: "0 16px" }} />
                <SVG.Document height="24px" style={{ margin: "0 16px" }} />
                <SVG.Image height="24px" style={{ margin: "0 16px" }} />
                <SVG.Book height="24px" style={{ margin: "0 16px" }} />
                <SVG.Video height="24px" style={{ margin: "0 16px" }} />
              </div>
              <div style={{ marginTop: 24 }}>
                Drag and drop files to add them to this slate
              </div>
            </EmptyState>
          </div>
        ) : null}
      </ScenePage>
    );
  }
}
