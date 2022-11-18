import React, { useContext } from "react";
import { Outlet, Navigate } from 'react-router-dom'
import AuthGlobal from "../Context/store/AuthGlobal";


const PrivateRoutes = () => {

    const context = useContext(AuthGlobal)

    return(
        context.stateUser.isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;