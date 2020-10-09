import * as React from "react";

import Application from "~/components/core/Application";

export const getServerSideProps = async ({ query }) => {
  return {
    props: { viewer: query.viewer, analytics: query.analytics },
  };
};

export default class ApplicationPage extends React.Component {
  render() {
    return (
      <Application
        viewer={this.props.viewer}
        analytics={this.props.analytics}
      />
    );
  }
}
