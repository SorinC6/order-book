/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Root>
      <p>
        github repository for the project{" "}
        <span>
          <a href="https://github.com/SorinC6/order-book-test" target="_blank">
            Here
          </a>
        </span>
      </p>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  height: 40px;
  background-color: ${props => props.theme.headerBackground};
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;

  p {
    color: white;
    margin: 10px;
  }

  a {
    color: lightgrey;
    cursor: pointer;
    text-decoration: none;
  }
`;
