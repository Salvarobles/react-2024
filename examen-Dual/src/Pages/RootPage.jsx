import { Outlet } from "react-router-dom";
import Footer from "../Container/Footer";
import Header from "../Container/Header";

const RootPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
