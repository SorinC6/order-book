import React, { useContext } from "react";
import Context from "../context";
import styled from "styled-components";
import TradeCard from "./common/TradeCard";
import TradeList from "./TradeList";

const Trades = () => {
  const { state } = useContext(Context);
  return (
    <Root>
      <h2>TRADES ETH/BTC</h2>
      <TradeCard title="Recent Trades">
        <TradeList trades={state.trades} loading={state.loadingTrades} />
      </TradeCard>
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
