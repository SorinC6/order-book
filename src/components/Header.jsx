/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const Header = props => {
  return (
    <Root>
      <h1>Order Book</h1>
      <h4>
        <a href="https://www.woopcode.com/" target="_blank">
          www.woopcode.com
        </a>
      </h4>
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
  justify-content: space-between;

  h1 {
    margin: 0 20px;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    padding-right: 30px;
  }
`;
