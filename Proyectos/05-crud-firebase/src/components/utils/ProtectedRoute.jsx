import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({redirect}) => {
    // cargamos el estado grobal
    const isActive = !!estadoGlobal;
    if (!isActive) {
        return <Navigate to={redirect} replace/>
    }

    return <Outlet/>
}


export default ProtectedRoute