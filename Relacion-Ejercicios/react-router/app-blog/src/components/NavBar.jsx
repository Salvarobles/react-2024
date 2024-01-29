import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className=" bg-purple-500">
      <nav>
        <ul>
          <li>
            <Link to={""}>Inicio</Link>
          </li>
          <li>
            {/* <Link to={}></Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
