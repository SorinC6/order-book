import React from "react";
import OrderCard from "./common/OrderCard";
import styled from "styled-components";
import BidsList from "./BidsList";

const OrderBook = () => {
  return (
    <Root>
      <p>Order Book</p>
      <Main>
        <OrderCard title="Bids">
          <BidsList />
        </OrderCard>
        <OrderCard title="Asks"></OrderCard>
      </Main>
    </Root>
  );
};

export default OrderBook;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
`;
