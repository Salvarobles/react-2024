import { Link } from "react-router-dom";
import srg from "/srg.svg";
import { Checkbox } from "@material-tailwind/react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
const Header = () => {
  const { theme, check, isCheck, handleCheckboxChange } = useContext(ThemeContext);
  return (
    <header className= {`${theme} p-5 flex justify-between font-sans mb-10`} >
      <div className="flex items-center">
        <Link to="/">
          <img src={srg} alt="Logo de react" className="w-16 h-16 mx-4 " />
        </Link>
        <span className="text-2xl font-bold">Cambio de Tema</span>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-10 mx-10">
            <li className=" hover:text-gray-400"><Link to='/'>Inicio</Link> </li>
            <li className=" hover:text-gray-400"><Link to='acerca'>Acerca de</Link></li>
            <li className=" hover:text-gray-400"><Link to='contact'>Contacto</Link></li>
        </ul>
        <Checkbox defaultChecked={isCheck} ref={check} onChange={handleCheckboxChange}/>
      </nav>
    </header>
  );
};

export default Header;