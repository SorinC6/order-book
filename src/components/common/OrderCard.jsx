import React from "react";
import styled from "styled-components";

const OrderCard = ({ title, children }) => {
  if (title === "Bids") {
    return (
      <Root>
        <h3>{title}</h3>
        <ColumnTitle>
          <p>Count</p>
          <p>Amount</p>
          <p>Total</p>
          <p>Price</p>
        </ColumnTitle>
        {children}
      </Root>
    );
  }
  if (title === "Asks") {
    return (
      <Root>
        <h3>{title}</h3>
        <ColumnTitle>
          <p>Price</p>
          <p>Total</p>
          <p>Amount</p>
          <p>Count</p>
        </ColumnTitle>
        {children}
      </Root>
    );
  }
  return <>Please chose a valid title for the Card</>;
};

export default OrderCard;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  /* padding: 6px; */
  margin: 5px;
  width: 300px;
  height: 73vh;
  overflow-y: scroll;
  background-color: ${props => props.theme.secondary};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 6px;

  h3 {
    border-bottom: 1px solid grey;
    margin: 5px;
    color: white;
  }
`;

const ColumnTitle = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: ${props => props.theme.secondary};
  top: 0;
  box-shadow: 0px 1px 3px #777;

  p {
    padding-top: 1px;
    width: 4rem;
    text-align: center;
    color: white;
  }
`;
