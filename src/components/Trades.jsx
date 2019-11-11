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
      <BottomSection>
        <p>FULL HISTORY</p>
        <p>
          <i class="fas fa-circle"></i>
          REAL TIME
        </p>
      </BottomSection>
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

const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    font-size: 13px;
    margin: 0;
  }

  p:nth-of-type(1) {
    margin-right: 10px;
  }

  p:nth-of-type(2) {
    margin-right: 10px;
  }

  i {
    margin-right: 5px;
    color: green;
  }
`;
