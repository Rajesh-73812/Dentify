import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children, roleRequired }) => {
    const token = Cookies.get('token');
    const role = Cookies.get('role');

    if (!token) {
        return <Navigate to='/' />
    }

    if (roleRequired && role !== roleRequired) {
        return <Navigate to='/' />
    }
    return children;
}

export default ProtectedRoute;