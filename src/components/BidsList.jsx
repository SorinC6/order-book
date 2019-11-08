import React, { useContext } from "react";
import Context from "../context";
import TableRow from "./common/TableRow";
import styled from "styled-components";
const BidsList = () => {
  const { state, dispatch } = useContext(Context);

  console.log("BIDS: ", state.bids);

  return (
    <Root>
      {state.bids &&
        state.bids.map((item, idx) => (
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
