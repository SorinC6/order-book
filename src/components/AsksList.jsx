import React from "react";
import TableRow from "./common/TableRow";
import styled from "styled-components";
const BidsList = ({ asks, loading }) => {
  return (
    <Root>
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {asks &&
        asks.map((item, idx) => (
          <TableRow
            key={idx}
            type="asks"
            count="1"
            volume={item[0]}
            price={item[1]}
            total={item[2]}
          />
        ))}
    </Root>
  );
};

export default BidsList;

const Root = styled.div`
  width: 100%;
`;
