import React, { useContext } from "react";
import Context from "../context";
import styled from "styled-components";
import TradeCard from "./common/TradeCard";
import TradeList from "./TradeList";

const Trades = () => {
  const { state } = useContext(Context);
  return (
    <Root>
      <TopSection>
        <h2>
          <i class="fas fa-check"></i>
          TRADES ETH/BTC
        </h2>
        <p>Market</p>
      </TopSection>
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

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    color: grey;
    margin-right: 10px;
  }

  p {
    margin: 0;
    margin-right: 10px;
  }
`;
