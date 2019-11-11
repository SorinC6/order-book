import React from "react";
import TableRow from "./common/TableRow";
import styled from "styled-components";
import PropagateLoader from "react-spinners/PropagateLoader";

const BidsList = ({ trades, loading }) => {
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

const Spinner = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
