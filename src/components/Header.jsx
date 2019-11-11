import React from "react";
import styled from "styled-components";

const Header = props => {
  return (
    <Root>
      <h1>Order Book</h1>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  height: 60px;
  background-color: ${props => props.theme.headerBackground};
  box-shadow: 0px 4px 7px #777;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;

  h1 {
    margin: 0 20px;
    color: white;
  }
`;
