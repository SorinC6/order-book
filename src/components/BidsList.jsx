import React from "react";
import TableRow from "./common/TableRow";
import styled from "styled-components";
const BidsList = ({ bids, loading }) => {
  return (
    <Root>
      {loading && <p>Loading...</p>}
      {bids &&
        bids.map((item, idx) => (
          <TableRow
            key={idx}
            type="bids"
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
