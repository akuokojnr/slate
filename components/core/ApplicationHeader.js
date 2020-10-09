import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/common/svg";

import ApplicationUserControls from "~/components/core/ApplicationUserControls";

import { css, keyframes } from "@emotion/react";
import { SearchModal } from "~/components/core/SearchModal";
import { dispatchCustomEvent } from "~/common/custom-events";

const STYLES_ICON_ELEMENT = css`
  height: 40px;
  width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #565151;
  user-select: none;
  cursor: pointer;
  pointer-events: auto;

  :hover {
    color: ${Constants.system.brand};
  }

  svg {
    transform: rotate(0deg);
    transition: 200ms ease transform;
  }
`;

const STYLES_APPLICATION_HEADER = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - ${Constants.sizes.navigation}px);
  height: 56px;
  padding: 0 48px 0 36px;
  pointer-events: none;
  background-color: ${Constants.system.white};

  @supports (
    (-webkit-backdrop-filter: blur(25px)) or (backdrop-filter: blur(25px))
  ) {
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.75);
  }

  @media (max-width: ${Constants.sizes.mobile}px) {
    padding: 0px 12px;
    width: 100%;
  }
`;

const STYLES_LEFT = css`
  flex-shrink: 0;
  ${"" /* width: 352px; */}
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const STYLES_MIDDLE = css`
  min-width: 10%;
  width: 100%;
  padding: 0 24px 0 48px;
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

const STYLES_RIGHT = css`
  min-width: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const STYLES_ROTATION = css`
  animation: ${rotate} 1s linear infinite;
`;

const STYLES_STATIC = css`
  transition: 200ms ease all;
`;

export default class ApplicationHeader extends React.Component {
  state = {
    isRefreshing: false,
  };

  _handleCreateSearch = (e) => {
    dispatchCustomEvent({
      name: "create-modal",
      detail: { modal: <SearchModal onAction={this.props.onAction} /> },
    });
  };

  _handleRehydrate = (e) => {
    this.setState({ isRefreshing: true }, async () => {
      await this.props.onRehydrate();
      this.setState({ isRefreshing: false });
    });
  };

  render() {
    const isBackDisabled =
      this.props.currentIndex === 0 || this.props.history.length < 2;

    const isForwardDisabled =
      this.props.currentIndex === this.props.history.length - 1 ||
      this.props.history.length < 2;

    return (
      <header css={STYLES_APPLICATION_HEADER}>
        <div css={STYLES_LEFT}>
          <span
            css={STYLES_MOBILE_ONLY}
            style={{ pointerEvents: "auto", marginLeft: 8, marginRight: 16 }}
          >
            <ApplicationUserControls
              viewer={this.props.viewer}
              onAction={this.props.onAction}
              onSignOut={this.props.onSignOut}
            />
          </span>

          <span css={STYLES_MOBILE_HIDDEN}>
            <span
              css={STYLES_ICON_ELEMENT}
              style={
                isBackDisabled
                  ? { cursor: "not-allowed", color: Constants.system.border }
                  : null
              }
              onClick={isBackDisabled ? () => {} : this.props.onBack}
            >
              <SVG.NavigationArrow
                height="24px"
                style={{ transform: `rotate(180deg)` }}
              />
            </span>
          </span>
          <span css={STYLES_MOBILE_HIDDEN}>
            <span
              css={STYLES_ICON_ELEMENT}
              style={
                isForwardDisabled
                  ? { cursor: "not-allowed", color: Constants.system.border }
                  : null
              }
              onClick={isForwardDisabled ? () => {} : this.props.onForward}
            >
              <SVG.NavigationArrow height="24px" />
            </span>
          </span>
          <span css={STYLES_MOBILE_HIDDEN}>
            <span
              css={this.state.isRefreshing ? STYLES_ROTATION : STYLES_STATIC}
              style={{ marginLeft: 24 }}
            >
              <span css={STYLES_ICON_ELEMENT} onClick={this._handleRehydrate}>
                <SVG.Refresh height="20px" />
              </span>
            </span>
          </span>
          <span css={STYLES_MOBILE_HIDDEN}>
            <span
              css={STYLES_ICON_ELEMENT}
              style={{ marginLeft: 24 }}
              onClick={this._handleCreateSearch}
            >
              <SVG.Search height="24px" />
            </span>
          </span>
        </div>
        {/* <div css={STYLES_MIDDLE} /> */}
        <div css={STYLES_RIGHT}>
          <span css={STYLES_MOBILE_HIDDEN}>
            <span
              css={STYLES_ICON_ELEMENT}
              onClick={() =>
                this.props.onAction({
                  type: "SIDEBAR",
                  value: "SIDEBAR_HELP",
                })
              }
            >
              <SVG.Help height="24px" />
            </span>
          </span>
          <span css={STYLES_MOBILE_ONLY}>
            <span
              css={STYLES_ICON_ELEMENT}
              style={
                isBackDisabled
                  ? { cursor: "not-allowed", color: Constants.system.border }
                  : null
              }
              onClick={isBackDisabled ? () => {} : this.props.onBack}
            >
              <SVG.NavigationArrow
                height="24px"
                style={{ transform: `rotate(180deg)` }}
              />
            </span>
            <span
              css={STYLES_ICON_ELEMENT}
              style={
                isForwardDisabled
                  ? { cursor: "not-allowed", color: Constants.system.border }
                  : null
              }
              onClick={isForwardDisabled ? () => {} : this.props.onForward}
            >
              <SVG.NavigationArrow height="24px" />
            </span>
            <span
              css={STYLES_ICON_ELEMENT}
              style={{ marginLeft: 12 }}
              onClick={this._handleCreateSearch}
            >
              <SVG.Search height="24px" />
            </span>
          </span>
        </div>
      </header>
    );
  }
}
