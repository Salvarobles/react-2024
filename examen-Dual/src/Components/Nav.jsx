/**
 * @author Salvador Robles Gómez
 * Navbar: Contiene el componente de la barra de navegación con el logo (SVG), botones "Home",
 * "About", y "User".
 */

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="border border-gray-300 py-3 flex gap-1 shadow-xl rounded-md justify-center ">
          <Link to="/insert">Insertar Productos -</Link>
          <Link to="/productos">Editar Productos -</Link>
          <Link to="/carrito">Carrito</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
