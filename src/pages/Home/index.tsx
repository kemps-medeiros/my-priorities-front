import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import NewTaskForm from "../../components/new-task-form/new-task-form";
import AuthContext from "../../contexts/auth";
import api from "../../services/api";
import "./style.css";


const Home: React.FC = () => {
    const context = useContext(AuthContext);
    const [tasks, setTasks] = useState<any[]>([]);
    const [isAddingNewTask, setIsAddingNewTask] = useState(false);
    const [isEditingTask, setIsEditingTask] = useState(false);
    const [editedTask, setEditedTask] = useState('');

    async function handleLogout() {
        await context.Logout()
    }

    useEffect(() => {

        api.get(`/api/users/findByEmail/${context.email}`,
            { headers: { 'Authorization': `Bearer ${context.token}` } }
        ).then(response => {
            context.setIdUser(response.data.id);
            getTasks(response.data.id)
        });

    }, [])

    async function getTasks(id: string) {
        await api.get(`/api/priorities/findDescriptionsByUserId/${id}`,
            { headers: { 'Authorization': `Bearer ${context.token}` } }
        ).then(response =>
            setTasks(response.data)
        );
    }

    async function handleAddNewTask() {
        setIsAddingNewTask(true);
    }

    async function handleCancelAddNewTask() {
        setIsAddingNewTask(false);
    }

    function handleButtonAddNewTask() {
        if (!isAddingNewTask) {
            return (
                <button
                    className="btn-large blue accent-4 new-task"
                    onClick={handleAddNewTask}>
                    Add New Task!!
                </button>
            )
        }

        return (<button
            className="btn-large red accent-4 logout"
            onClick={handleCancelAddNewTask}>
            Cancel
        </button>)
    }

    function editTask(idEdited: string) {
        setIsEditingTask(true);
        setEditedTask(idEdited);

    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-20">
                    <div className="left">
                        {handleButtonAddNewTask()}
                    </div>
                    <div className="right">
                        <button
                            className="btn-large red accent-4 logout"
                            onClick={handleLogout}>
                            LogOut
                        </button>
                    </div>
                </div>
                <div className="row">
                    {isAddingNewTask && <NewTaskForm getAllTasks={getTasks} />}
                    <div>
                        <div className="center">
                            <h2 className="purple-color">My Tasks</h2>
                        </div>
                        {tasks.map(task => (
                            <div className="col s12 m12 l6 offset-l3">
                                <div className="card horizontal">
                                    <div className="card-stacked" id={task.id}>
                                        <div className="card-content center-align">
                                            <h6 className="bold">{task.description}</h6>
                                        </div>
                                        <div className="row">
                                            <div className="card-action">
                                                <div className="left">
                                                    <h6 className="left">
                                                        Priority level /
                                                    </h6>
                                                    <h6 className="right bold purple-color">
                                                        {task.prioritie_level}
                                                    </h6>
                                                </div>
                                                <div className="right">
                                                    <button
                                                        className="btn-small red accent-4 logout">
                                                        Delete
                                                    </button>
                                                </div>
                                                <div className="edit mr-20 right">
                                                    <button
                                                        className="btn-small"
                                                        onClick={() => editTask(task.id)}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;