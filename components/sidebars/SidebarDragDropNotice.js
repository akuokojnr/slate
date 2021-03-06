import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/common/svg";
import * as System from "~/components/system";

import { css } from "@emotion/core";
import { SidebarWarningMessage } from "~/components/core/WarningMessage";
import { FileTypeGroup } from "~/components/core/FileTypeIcon";

export default class SidebarDragDropNotice extends React.Component {
  state = {};

  _handleSubmit = () => {
    this.props.onSubmit({});
  };

  _handleCancel = () => {
    this.props.onCancel();
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <System.P
          style={{
            fontFamily: Constants.font.semiBold,
            fontSize: Constants.typescale.lvl3,
          }}
        >
          Drag & drop
        </System.P>
        <FileTypeGroup style={{ margin: "64px 0px" }} />
        <System.P style={{ marginTop: 24 }}>
          Drag and drop a file anywhere on the screen to add it to your data. <br />
          <br />
          Dropping a file while on a slate page will add it to that slate.
        </System.P>

        <SidebarWarningMessage />
      </React.Fragment>
    );
  }
}
