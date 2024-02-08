import { Outlet } from "react-router-dom";
import Footer from "../containers/Footer";

const RootPage = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
