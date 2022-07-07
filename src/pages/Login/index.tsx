import React, { useContext } from "react";
import Navbar from "../../components/navbar";
import AuthContext from "../../contexts/auth";

const Login: React.FC = () => {
    const context = useContext(AuthContext);

    async function handleLogin() {
        await context.Login();

    }

    return (
        <div>
            <Navbar />
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;