import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import LoginModal from "./components/LoginModal";

import withAuthenticate from "./authentication/withAuthenticate";

const ContentWithAuthenticate = withAuthenticate(Content);

class App extends React.Component {
  state = {
    loginModalDisplayed: false,
    loggedIn: false,
    username: ""
  };

  componentDidMount = () => {
    let username = localStorage.getItem("username");

    if (username) {
      this.setState({
        loggedIn: true,
        username: username
      });
    }
  };

  displayLogin = () => {
    this.setState({
      loginModalDisplayed: true
    });
  };

  logIn = username => {
    this.setState({
      loginModalDisplayed: false,
      loggedIn: true,
      username: username
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.loginModalDisplayed && <LoginModal logIn={this.logIn} />}
        <TopBar
          displayLogin={this.displayLogin}
          username={this.state.username}
        />
        <Header />
        <ContentWithAuthenticate loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
