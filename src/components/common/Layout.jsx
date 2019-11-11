import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
`;
