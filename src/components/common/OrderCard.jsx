import React from "react";
import styled from "styled-components";

const OrderCard = ({ title, children }) => {
  return (
    <Root>
      <h1>{title}</h1>
      <ColumnTitle>
        <p>Count</p>
        <p>Amount</p>
        <p>Total</p>
        <p>Price</p>
      </ColumnTitle>
      {children}
    </Root>
  );
};

export default OrderCard;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;

  h1 {
    border-bottom: 1px solid greu;
  }
`;

const ColumnTitle = styled.div`
  display: flex;
`;
