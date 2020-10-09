import * as React from "react";
import * as Constants from "~/common/constants";
import * as Strings from "~/common/strings";

import { css } from "@emotion/react";
import { ProcessedText } from "~/components/system/components/Typography";

import SlatePreviewBlocks from "~/components/core/SlatePreviewBlock";

const STYLES_PROFILE = css`
  text-align: center;
  width: 100%;
  margin-top: 16px;
`;

const STYLES_PROFILE_IMAGE = css`
  background-color: ${Constants.system.foreground};
  background-size: cover;
  background-position: 50% 50%;
  width: 152px;
  height: 152px;
  border-radius: 4px;
  margin: 0 auto;
  padding: 0;
`;

const STYLES_NAME = css`
  font-size: ${Constants.typescale.lvl3};
  font-family: ${Constants.font.medium};
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 24px 0 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const STYLES_DESCRIPTION = css`
  font-size: ${Constants.typescale.lvl1};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px 0 24px;
  word-wrap: break-word;
`;

const STYLES_LINK = css`
  color: ${Constants.system.black};
  text-decoration: none;
`;

export default class Profile extends React.Component {
  render() {
    let data = this.props.creator ? this.props.creator : this.props.data;
    return (
      <div css={STYLES_PROFILE}>
        <div
          css={STYLES_PROFILE_IMAGE}
          style={{ backgroundImage: `url('${data.data.photo}')` }}
        />
        <br />
        <div css={STYLES_NAME}>{Strings.getPresentationName(data)}</div>
        <br />
        {data.data.body ? (
          <React.Fragment>
            <div css={STYLES_DESCRIPTION}>
              <ProcessedText text={data.data.body} />
            </div>
            <br />
          </React.Fragment>
        ) : null}
        <br />
        {this.props.buttons}
        <br />
        {data.slates && data.slates.length ? (
          <SlatePreviewBlocks
            external={this.props.onAction ? false : true}
            slates={data.slates}
            username={data.username}
            onAction={this.props.onAction}
          />
        ) : null}
        {/* <div>
            {data.slates.map((slate) => {
              if (this.props.onAction) {
                return (
                  <div
                    key={slate.id}
                    onClick={() =>
                      this.props.onAction({
                        type: "NAVIGATE",
                        value: this.props.sceneId,
                        scene: "PUBLIC_SLATE",
                        data: slate,
                      })
                    }
                  >
                    <SlatePreviewBlock
                      slate={slate}
                      username={data.username}
                      editing={this.props.editing}
                    />
                  </div>
                );
              }
              return (
                <a
                  key={slate.id}
                  href={`/${data.username}/${slate.slatename}`}
                  css={STYLES_LINK}
                >
                  <SlatePreviewBlock external slate={slate} />
                </a>
              );
            })}
          </div> */}
      </div>
    );
  }
}
