import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

interface AuthContextData {
    signed: boolean;
    Login(): Promise<void>;
    //token: string | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
    children?: React.ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const [token, setToken] = useState(null);

    async function Login() {

        try {
            const response = await api.post('/auth/login', {
                email: 'neymar@gmail.com',
                password: 'Neymar@1234',
            });
            if (response) {
                setToken(response.data.access_token);
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     console.log(token);
    // }, [token])


    return (
        <AuthContext.Provider value={{ signed: Boolean(token), Login }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;