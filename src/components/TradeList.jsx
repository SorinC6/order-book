import React from "react";
import TableRow from "./common/TableRow";
import styled from "styled-components";
const BidsList = ({ trades, loading }) => {
  return (
    <Root>
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {trades &&
        trades.map((item, idx) => (
          <TableRow
            key={idx}
            type="trades"
            time={item[2]}
            price={item[0]}
            total={item[1]}
          />
        ))}
    </Root>
  );
};

export default BidsList;

const Root = styled.div`
  width: 100%;
`;
