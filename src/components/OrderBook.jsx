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
          <i className="fas fa-check"></i>
          ORDER BOOK ETH/BTC
        </h2>
        <div>
          <i className="fas fa-minus"></i>
          <i className="fas fa-plus"></i>
          <i className="fas fa-bell"></i>
          <i className="fas fa-cog"></i>
          <i className="fas fa-search"></i>
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
      <BottomSection>
        <p>FULL BOOK</p>
        <p>
          <i className="fas fa-circle"></i>
          REAL BOOK
        </p>
      </BottomSection>
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
