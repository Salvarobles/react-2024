import NavBar from "../components/NavBar";
import { useAuthContext } from "../context/useAuthContext";

const Header = () => {
  const { logout } = useAuthContext();
  return (
    <>
      <button onClick={logout}>salir</button>
      <NavBar />
    </>
  );
};

export default Header;
