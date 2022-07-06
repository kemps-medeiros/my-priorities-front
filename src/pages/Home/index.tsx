import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";

const Home: React.FC = () => {
    const context = useContext(AuthContext);

    async function handleLogout() {
        await context.Logout()
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default Home;