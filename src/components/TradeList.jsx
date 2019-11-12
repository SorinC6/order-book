import React from "react";
import TableRow from "./common/TableRow";
import styled from "styled-components";
import Spinner from "./common/Spinner";

const BidsList = ({ trades, loading }) => {
  return (
    <Root>
      <Spinner loading={loading} />
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
