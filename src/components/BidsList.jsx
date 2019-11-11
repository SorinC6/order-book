import React from "react";
import TableRow from "./common/TableRow";
import styled from "styled-components";
import PropagateLoader from "react-spinners/PropagateLoader";

const BidsList = ({ bids, loading }) => {
  return (
    <Root>
      {loading && (
        <Spinner style={{ color: "white" }}>
          <PropagateLoader
            sizeUnit={"px"}
            size={10}
            color={"white"}
            loading={loading}
          />
        </Spinner>
      )}
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

const Spinner = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  justify-content: center;
`;
