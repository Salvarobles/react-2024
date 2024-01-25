import React from "react";
import { Link } from "react-router-dom";

const NavNavigation = () => {
  return (
    <header className="bg-blue-200 ">
      <nav>
        <ul>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"usuarios"}>Usuarios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavNavigation;
