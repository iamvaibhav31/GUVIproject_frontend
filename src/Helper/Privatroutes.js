import React from "react";
import { Outlet, Navigate } from 'react-router-dom'


function Privatroutes() {
     let auth = false;

     return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default Privatroutes;
