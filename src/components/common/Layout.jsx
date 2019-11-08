import React from "react";
import Header from "../Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default Layout;

const MainContent = styled.div`
  display: flex;
`;
