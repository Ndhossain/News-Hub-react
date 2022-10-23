import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({ children }) {
    const location = useLocation();
    const { currentUser } = useAuth();

    if (currentUser && currentUser?.uid) {
        if (!currentUser?.emailVerified) {
            return <>User email is not verified</>;
        }
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
