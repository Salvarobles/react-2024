import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/about"> About</Link>

      <Link to="/">Home</Link>
    </>
  );
};

export default NavBar;
