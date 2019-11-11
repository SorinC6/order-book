import React from "react";
import Dropdown from "./DropDown";
import styled from "styled-components";

const SidePannel = () => {
  return (
    <Root>
      <header>
        <i class="fab fa-ethereum"></i>
        <h2>ETH/BTC</h2>
      </header>
      <section>
        <TopSection>
          <i class="fas fa-check"></i>
          <h3>ORDER FROM</h3>
        </TopSection>
        <Dropdown />
      </section>
    </Root>
  );
};

export default SidePannel;

const Root = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 250px;
  color: white;
  background-color: ${props => props.theme.secondary};
  box-shadow: ${props => props.boxShadow};
  header {
    display: flex;
    align-items: center;

    i {
      font-size: 50px;
      margin: 0 10px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: baseline;

  i {
    color: grey;
    margin: 0 5px;
  }
`;
