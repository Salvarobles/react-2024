import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavNavigation from "../components/NavNavigation";

const RootLayout = () => {
  return (
    <>
    {/* // Barra de navegacion */}
    <NavNavigation/>
    {/* // Aqui vendria todos los hijos
    Aqui vendria un footer */}
    <Outlet/>
    <Footer/>
    </>
  )
};

export default RootLayout;
