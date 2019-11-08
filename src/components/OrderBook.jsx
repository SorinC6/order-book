import React from "react";
import OrderCard from "./common/OrderCard";
import styled from "styled-components";
import BidsList from "./BidsList";
import AsksList from "./AsksList";

const OrderBook = () => {
  return (
    <Root>
      <h2>ORDER BOOK ETH/BTC</h2>
      <Main>
        <OrderCard title="Bids">
          <BidsList />
        </OrderCard>
        <OrderCard title="Asks">
          <AsksList />
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
