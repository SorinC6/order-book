import React from "react";
import styled from "styled-components";
import PropagateLoader from "react-spinners/PropagateLoader";

const Spinner = ({ loading }) => {
  return (
    <>
      {loading && (
        <Spin style={{ color: "white" }}>
          <PropagateLoader
            sizeUnit={"px"}
            size={10}
            color={"white"}
            loading={loading}
          />
        </Spin>
      )}
    </>
  );
};

export default Spinner;

const Spin = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
