import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isActive, redirect}) => {

    if (!isActive) {
        return <Navigate to={redirect} replace/>
    }

    return <Outlet/>
}


export default ProtectedRoute