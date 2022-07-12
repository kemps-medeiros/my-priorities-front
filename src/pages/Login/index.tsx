import React from "react";

import Navbar from "../../components/navbar/navbar";
import "./style.css";
import LoginCard from "../../components/login-card/login-card";

const Login: React.FC = () => {

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="center box-title">
                    <h3 className="title">Hi, Welcome to MyPrioties App!!</h3>
                    <h4 className="sub-title">This application was made for you, who like me, likes to organize your tasks in order of priority</h4>
                </div>
                <LoginCard />
            </div>
        </div>
    )
}

export default Login;