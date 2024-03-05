import { Link } from "react-router-dom";
import Nav from "../Components/Nav";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 ">
      <Link to="">
        {" "}
        <h2>Examen de Prueba</h2>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
