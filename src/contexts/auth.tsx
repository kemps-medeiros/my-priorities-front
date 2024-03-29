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
    token: string | null;
    idUser: string;
    setIdUser: (idUser: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
    children?: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const [token, setToken] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorRequest, setErrorRequest] = useState(null);
    const [idUser, setIdUser] = useState('');

    async function Login() {

        try {
            const response = await api.post('/auth/login', {
                email: email,
                password: password,
            });
            setToken(response.data.access_token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('email', email);
        } catch (error: any) {
            setErrorRequest(error)
            console.log(errorRequest)
        }
    }

    async function Logout() {
        try {
            setErrorRequest(null);
            setToken(null);
            setEmail('null');
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
            errorRequest,
            token,
            idUser,
            setIdUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;