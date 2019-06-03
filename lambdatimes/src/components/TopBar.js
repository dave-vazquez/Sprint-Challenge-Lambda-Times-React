import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const NestedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    cursor: pointer;
  }
`;

const ContainerLeft = styled(NestedContainer)`
  justify-content: none;
  flex: 1;
  font-size: 11px;

  span {
    margin-right: 25%;
    font-weight: bold;
  }
`;

const ContainerCenter = styled(NestedContainer)`
  justify-content: center;
  flex: 3;
  font-size: 9px;

  span {
    margin-right: 5%;
  }

  span:last-child {
    margin-right: 0;
  }

  span:hover {
    text-decoration: underline;
  }
`;

const ContainerRight = styled(NestedContainer)`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const TopBar = props => {
  return (
    <StyledTopBar>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight className="container-right">
          <span onClick={props.displayLogin}>
            {props.username
              ? `WELCOME ${props.username.toUpperCase()}`
              : "LOG IN"}
          </span>
        </ContainerRight>
      </Container>
    </StyledTopBar>
  );
};

TopBar.PropType = {
  displayLogin: PropType.func,
  username: PropType.string
};

export default TopBar;
