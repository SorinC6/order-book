import React, { useContext } from "react";
import Context from "../context";
import OrderCard from "./common/OrderCard";
import styled from "styled-components";
import BidsList from "./BidsList";
import AsksList from "./AsksList";

const OrderBook = () => {
  const { state } = useContext(Context);

  return (
    <Root>
      <h2>ORDER BOOK ETH/BTC</h2>
      <Main>
        <OrderCard title="Bids">
          <BidsList bids={state.bids} loading={state.loadingOrder} />
        </OrderCard>
        <OrderCard title="Asks">
          <AsksList asks={state.asks} loading={state.loadingOrder} />
        </OrderCard>
      </Main>
    </Root>
  );
};

export default OrderBook;

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
