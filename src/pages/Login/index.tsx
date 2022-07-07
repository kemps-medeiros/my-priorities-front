import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";

import Navbar from "../../components/navbar";
import "./style.css";

const Login: React.FC = () => {
    const context = useContext(AuthContext);

    async function handleLogin() {
        await context.Login();

    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Login</h1>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;