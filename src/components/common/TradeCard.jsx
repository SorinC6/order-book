import React from "react";
import styled from "styled-components";

const TradeCard = ({ title, children }) => {
  return (
    <Root>
      <h3>{title}</h3>
      <ColumnTitle>
        <p>TIME</p>
        <p>PRICE</p>
        <p>AMOUNT</p>
      </ColumnTitle>
      {children}
    </Root>
  );
};

export default TradeCard;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 6px;
  margin: 5px;
  width: 300px;

  h3 {
    border-bottom: 1px solid grey;
    margin: 5px;
  }
`;

const ColumnTitle = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
  }
`;
