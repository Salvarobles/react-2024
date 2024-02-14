import { Outlet } from "react-router-dom";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import { useAuth } from "../context/AuthProvider";

const RootPage = () => {
  return (
    <>
      <Header/> 
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
