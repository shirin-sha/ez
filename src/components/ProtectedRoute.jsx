import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { route } from '../globals/constants';
import Loader from '../globals/elements/loader';

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        return <Navigate to={route.admin.LOGIN} replace />;
    }

    return children;
}

export default ProtectedRoute;

