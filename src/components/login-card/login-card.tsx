import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/auth";
import "./style.css";


const LoginCard: React.FC = () => {
    const context = useContext(AuthContext);


    async function handleLogin() {
        await context.Login();

    }

    return (
        <div>
            <div className="row mt-50">
                <div className="col s12 l4 offset-l4">
                    <div className="card">
                        <div className="card-action pink darken-4 white-text center">
                            <h4>MyPriorities Login</h4>
                        </div>
                        <div className="card-content">
                            <div className="form-field">
                                <label htmlFor="email" >Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    onChange={event => context.setEmail(event.target.value)} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="password" >Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={event => context.setPassword(event.target.value)} />
                            </div>
                            <div className="form-field center">
                                <button
                                    className="btn-large green accent-4 login"
                                    onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <a href="#" className="btn">
                            Sign Up!
                        </a>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default LoginCard;