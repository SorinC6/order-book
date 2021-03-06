import React from "react";
import TableRow from "./common/TableRow";
import styled from "styled-components";
import Spinner from "./common/Spinner";

const BidsList = ({ bids, loading }) => {
  return (
    <Root>
      <Spinner loading={loading} />
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
