import React, { useContext } from "react";
import AuthContext from "../contexts/auth";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
    const { signed } = useContext(AuthContext);
    console.log(signed)

    return signed ? <OtherRoutes /> : <SignRoutes />


};


export default AppRoutes;