import { useAuthContext } from "../context/useAuthContext";
import { cerrarSesion } from "../firebase/productosApi";

const SignOutButton = () => {
  const { logout } = useAuthContext();
  const handleSignOut = async () => {
    // tendra que llamar una funcion de firebase para cerrar sesion.
    try {
      const hascerrado = await cerrarSesion();
      if (hascerrado) {
        logout();
      } else {
        throw new Error("No se puede cerrar la sesion")
      }
    } catch (error) {
      console.log("Error sesion: " + error);
    }
  };
  return (
    <button
      className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md"
      onClick={handleSignOut}
    >
      Cerrar Sesión
    </button>
  );
};

export default SignOutButton;
