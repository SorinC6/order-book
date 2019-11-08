import React from "react";
import styled from "styled-components";
import TradeCard from "./common/TradeCard";

const Trades = () => {
  return (
    <Root>
      <h2>TRADES ETH/BTC</h2>
      <TradeCard title="Recent Trades" />
    </Root>
  );
};

export default Trades;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 17px;
  }
`;

const Main = styled.div`
  display: flex;
`;
