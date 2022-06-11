import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/auth";

const Login: React.FC = () => {
    const context = useContext(AuthContext);


    function handleLogin() {
        context.Login();

    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;