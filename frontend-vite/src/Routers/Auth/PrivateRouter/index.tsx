import React from "react";
import { Navigate } from "react-router-dom";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

type Private = {
    children:any,
    redirectTo:any
}
const PrivateRoute:React.FC<Private> = ({
    children,
    redirectTo
}) => {

    const { tokenSessao } = buscaDadoUsuarioNaSessao();

    const isAuthenticated = tokenSessao !== null ;
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute;