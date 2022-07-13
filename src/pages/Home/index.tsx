import React, { useContext } from "react";
import Navbar from "../../components/navbar/navbar";
import NewTaskForm from "../../components/new-task-form/new-task-form";
import AuthContext from "../../contexts/auth";
import "./style.css";

const Home: React.FC = () => {
    const context = useContext(AuthContext);

    async function handleLogout() {
        await context.Logout()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-20 right-align">
                    <button
                        className="btn-large red accent-4 logout"
                        onClick={handleLogout}>
                        LogOut
                    </button>
                    <div className="row">
                        <NewTaskForm />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;