import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";

const RootLayout = () => {
  return (
    <>
      <ContextProvider>

        <Header/>

        <Outlet />

        <Footer />
      </ContextProvider>
    </>
  );
};

export default RootLayout;
