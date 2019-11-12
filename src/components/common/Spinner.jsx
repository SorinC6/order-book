import React from "react";
import styled from "styled-components";
import PropagateLoader from "react-spinners/PropagateLoader";
import PropTypes from "prop-types";

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

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Spinner;

const Spin = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
