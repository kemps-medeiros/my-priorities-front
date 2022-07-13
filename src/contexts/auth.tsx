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
                // email: 'neymar@gmail.com',
                // password: 'Neymar@1234',
                email: email,
                password: password,
            });
            // if (response) {

            setToken(response.data.access_token);
            // console.log(token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('email', email);
            // await api.get(`/api/users/findByEmail/${email}`
            //     , {
            //         headers:
            //         {
            //             'Authorization': `Bearer ${token}`
            //         }
            //     }
            // ).then(response => console.log(response));


            // }
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

    // async function getUserId() {
    //     await api.get(`/api/users/findByEmail/${email}`
    //         , { headers: { Authorization: `Bearer ${token}` } }
    //     ).then(response => console.log(response));
    // }

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
            token
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;