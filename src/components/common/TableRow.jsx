import React from "react";
import styled from "styled-components";
import moment from "moment";

const TableRow = ({ count, volume, price, total, time, type }) => {
  let timeFormat = moment(time).format("h:mm:ss");

  if (type === "bids") {
    return (
      <Root>
        <p>{count}</p>
        <p>{volume}</p>
        <p>{total}</p>
        <p>{price}</p>
      </Root>
    );
  }

  if (type === "asks") {
    return (
      <Root>
        <p>{price}</p>
        <p>{total}</p>
        <p>{volume}</p>
        <p>{count}</p>
      </Root>
    );
  }

  //const date = moment(time).format("MMMM D, YYYY");
  if ((type = "trades")) {
    return (
      <Root>
        <p>{timeFormat}</p>
        <p>{price}</p>
        <p>{total}</p>
      </Root>
    );
  }
  return <>Please Select a valid type</>;
};

export default TableRow;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 12px;
    margin: 5px;
    width: 4rem;
    text-align: center;
    color: #6a7d82;
  }
  p:nth-child(1) {
    width: 16%;
  }
  p:nth-child(2) {
  }
  p:nth-child(3) {
    width: 5rem;
  }
  p:nth-child(4) {
    width: 2.9rem;
  }
`;
