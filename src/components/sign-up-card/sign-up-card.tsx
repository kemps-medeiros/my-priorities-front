import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import api from "../../services/api";

import "./style.css";

interface ISignUpProps {
    setIsAddingNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpCard: React.FC<ISignUpProps> = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState<any>([]);

    async function handleRegister() {
        try {
            const response = await api.post('/api/users', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });

            props.setIsAddingNewUser(false);
            alert('user registered successfully')
        } catch (error: any) {
            setErrorMessages(error)
        }
    }

    async function handleCancel() {
        props.setIsAddingNewUser(false);
    }

    return (
        <div>
            <div className="row mt-50">
                <div className="col s12 l4 offset-l4">
                    <div className="card">
                        <div className="card-action pink darken-4 white-text center">
                            <h4>Sign Up!</h4>
                        </div>
                        <div className="card-content">
                            <div className="form-field">
                                <label htmlFor="first-name" >First Name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    onChange={event => setFirstName(event.target.value)}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="last-name" >Last Name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    onChange={event => setLastName(event.target.value)}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="password" >Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="form-field center mt-15">
                                <button
                                    className="btn-large green accent-4 login"
                                    onClick={handleRegister}>
                                    Register
                                </button>
                                <button
                                    className="btn-large red accent-4 logout ml-15"
                                    onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="message-error">

                        </span>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default SignUpCard;