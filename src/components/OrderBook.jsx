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
      <TopSection>
        <h2>
          <i class="fas fa-check"></i>
          ORDER BOOK ETH/BTC
        </h2>
        <div>
          <i class="fas fa-minus"></i>
          <i class="fas fa-plus"></i>
          <i class="fas fa-bell"></i>
          <i class="fas fa-cog"></i>
          <i class="fas fa-search"></i>
        </div>
      </TopSection>
      <Main>
        <OrderCard title="Bids">
          <BidsList bids={state.bids} loading={state.loadingOrder} />
        </OrderCard>
        <OrderCard title="Asks">
          <AsksList asks={state.asks} loading={state.loadingOrder} />
        </OrderCard>
      </Main>
      <BottomSection></BottomSection>
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

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    color: grey;
    margin-right: 10px;
  }
`;

const BottomSection = styled.div``;
