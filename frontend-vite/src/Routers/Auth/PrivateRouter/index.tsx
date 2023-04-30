import React from "react";
import { Navigate } from "react-router-dom";

type Private = {
    children:any,
    redirectTo:any
}
const PrivateRoute:React.FC<Private> = ({
    children,
    redirectTo
}) => {
    const isAuthenticated = localStorage.getItem('token') !== null ;
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute;