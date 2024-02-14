import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Header = () => {
  const { signInFirebase, logout } = useAuth();
  console.log(signInFirebase);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-end items-center">
      <div className="flex items-center">
        <img
          src={signInFirebase.photoURL}
          alt="Imagen de perfil"
          className="rounded-full mr-2"
          width="40"
          height="40"
        />
        <span className="mr-4">{signInFirebase.displayName}</span>
      </div>
      <Link to={"/login"}>
        <button
          className="bg-white text-gray-800 py-2 px-4 rounded"
          onClick={() => logout()}
        >
          Cerrar Sesión
        </button>
      </Link>
    </header>
  );
};

export default Header;
