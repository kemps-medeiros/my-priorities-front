import React, { useState } from "react";

import Navbar from "../../components/navbar/navbar";
import "./style.css";
import LoginCard from "../../components/login-card/login-card";
import SignUpCard from "../../components/sign-up-card/sign-up-card";

const Login: React.FC = () => {
    const [isAddingNewUser, setIsAddingNewUser] = useState(false);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="center box-title">
                    <h3 className="title">Hi, Welcome to MyPrioties App!!</h3>
                    <h4 className="sub-title">This application was made for you, who like me, likes to organize your tasks in order of priority</h4>
                </div>
                {!isAddingNewUser && <LoginCard setIsAddingNewUser={setIsAddingNewUser} />}
                {isAddingNewUser && <SignUpCard setIsAddingNewUser={setIsAddingNewUser} />}
            </div>
        </div>
    )
}

export default Login;