import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/useAuthContext";

const ProtectedRoute = ({ redirect }) => {
  const { signInFirebase } = useAuthContext();

  // cargamos el estado grobal
  const isActive = !!signInFirebase;
  if (!isActive) {
    return <Navigate to={redirect} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
