import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider';

const ProtectedRoute = ({redirect}) => {
    const { signInFirebase } = useAuth();

    // cargamos el estado grobal
    const isActive = !!signInFirebase;
    if (!isActive) {
        return <Navigate to={redirect} replace/>
    }

    return <Outlet/>
}


export default ProtectedRoute