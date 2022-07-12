import React, { createContext, useState } from "react";
import api from "../services/api";

interface AuthContextData {
    signed: boolean;
    Login(): Promise<void>;
    Logout(): Promise<void>;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    errorRequest: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
    children?: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorRequest, setErrorRequest] = useState(null);

    async function Login() {

        try {
            const response = await api.post('/auth/login', {
                // email: 'neymar@gmail.com',
                // password: 'Neymar@1234',
                email: email,
                password: password,
            });
            if (response) {
                setToken(response.data.access_token);
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            }
        } catch (error: any) {
            setErrorRequest(error)
            console.log(errorRequest)
        }
    }

    async function Logout() {
        try {
            setToken(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            signed: Boolean(token),
            Login,
            Logout,
            email,
            setEmail,
            password,
            setPassword,
            errorRequest
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;