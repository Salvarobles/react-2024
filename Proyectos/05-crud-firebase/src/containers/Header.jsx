import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import SignOutButton from "../components/SignOutButton";

const Header = () => {
  const { signInFirebase } = useAuthContext();
  console.log(signInFirebase);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-end items-center">
      <div className="flex items-center">
        <img
          src={signInFirebase?.photoURL}
          alt="Imagen de perfil"
          className="rounded-full mr-2"
          width="40"
          height="40"
        />
        <span className="mr-4">{signInFirebase.displayName}</span>
      </div>
      <SignOutButton/>
    </header>
  );
};

export default Header;
