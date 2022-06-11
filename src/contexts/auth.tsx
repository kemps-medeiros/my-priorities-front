import React, { createContext, ReactNode, useState } from "react";
import api from "../services/api";

interface AuthContextData {
    signed: boolean;
    Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
    children?: React.ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const [token, setToken] = useState('');

    async function Login() {
        // const response = await api.post('/auth/login', {
        //     email: 'neymar@gmail.com',
        //     password: 'Neymar@1234',
        // });
        // if (response) {
        //     setToken(response.data.access_token);
        //     console.log(token);
        // }
        await api.post('/auth/login', {
            email: 'neymar@gmail.com',
            password: 'Neymar@1234',
        }).then((response) => {
            setToken(response.data.access_token);
            console.log(token);
        })

    }


    return (
        <AuthContext.Provider value={{ signed: true, Login }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;