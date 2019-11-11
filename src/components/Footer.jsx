import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Root>
      <p>
        github repository for the project <span>Here</span>
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

  span {
    color: lightgrey;
    cursor: pointer;
  }
`;
