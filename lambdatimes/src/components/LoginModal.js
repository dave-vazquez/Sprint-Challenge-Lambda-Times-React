import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.5);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 250px;
  height: 170px;

  padding: 10px 0;

  background-color: white;
`;

const Header = styled.h1`
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 175px;
  height: 30px;

  outline: none;
  border: 1px solid black;

  padding-left: 10px;

  background-color: #fafafa;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 175px;

  margin: 0 5px;
  padding: 2px 10px;

  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: bold;

  background-color: #333;

  cursor: pointer;
`;

const ErrorDisplay = styled.p`
  height: 18px;

  margin: 0;
  font-size: 0.8rem;
  color: red;
`;

class LoginModal extends React.Component {
  state = {
    username: "",
    password: "",
    invalidInput: false
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.username && this.state.password) {
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);

      this.props.logIn(this.state.username);
    } else {
      this.setState({
        invalidInput: true
      });
    }
  };

  render() {
    return (
      <LoginWrapper>
        <LoginForm name="login form" onSubmit={this.onSubmitHandler}>
          <Header>Log In:</Header>
          <Input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onChangeHandler}
          />
          <Input
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
          <Button onSubmit={this.onSubmitHandler}>Log In</Button>
          <ErrorDisplay>
            {this.state.invalidInput && "Must enter Username and Password"}
          </ErrorDisplay>
        </LoginForm>
      </LoginWrapper>
    );
  }
}

LoginModal.PropType = {
  logIn: PropType.func
};

export default LoginModal;
