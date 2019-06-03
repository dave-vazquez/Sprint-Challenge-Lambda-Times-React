import React from "react";

const withAuthenticate = Content => {
  return class extends React.Component {
    render() {
      return this.props.loggedIn && <Content />;
    }
  };
};

export default withAuthenticate;
