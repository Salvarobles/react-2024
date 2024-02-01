import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5 flex justify-between font-sans mb-10">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo de react" className="w-16 h-16 mx-4 " />
        </Link>
        <span className="text-2xl font-bold">Api de Peliculas con React</span>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-10 mx-10">
            <li className=" hover:text-gray-400"><Link>Peliculas</Link> </li>
            <li className=" hover:text-gray-400"><Link>Acerca de</Link> </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
