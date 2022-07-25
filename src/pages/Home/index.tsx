import React, { useContext, useEffect, useState } from "react";
import DeleteTaskCard from "../../components/delete-task-card/deleted-task.card";
import EditTaskForm from "../../components/edit-task-form/edit-task.form";
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
    const [isDeletingTask, setIsDeletingTask] = useState(false);
    const [deletedTask, setDeletedTask] = useState('');

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
        if (!isAddingNewTask && !isEditingTask && !isDeletingTask) {
            return (
                <button
                    className="btn-large blue accent-4 new-task"
                    onClick={handleAddNewTask}>
                    Add New Task!!
                </button>
            )
        }

        if (isAddingNewTask && !isEditingTask) {
            return (<button
                className="btn-large red accent-4 logout"
                onClick={handleCancelAddNewTask}>
                Cancel
            </button>)
        }

    }

    function handleButtonEditTask() {
        if (!isAddingNewTask && isEditingTask) {
            return (<button
                className="btn-large red accent-4 logout"
                onClick={handleCancelEditTask}>
                Cancel
            </button>)
        }
    }

    function handleCancelEditTask() {
        setIsEditingTask(false);
    }

    function editTask(idEdited: string) {
        if (isAddingNewTask === true) {
            setIsAddingNewTask(false);
        }
        setIsEditingTask(true);
        setEditedTask(idEdited);

    }

    function deleteTask(idDeleted: string) {
        setIsDeletingTask(true);
        setDeletedTask(idDeleted);
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-20">
                    <div className="left">
                        {handleButtonAddNewTask()}
                        {handleButtonEditTask()}
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
                    {isAddingNewTask && <NewTaskForm getAllTasks={getTasks} setIsAddingNewTask={setIsAddingNewTask} />}
                    {isEditingTask &&
                        <EditTaskForm
                            getAllTasks={getTasks}
                            taskId={editedTask}
                            setIsEditingTask={setIsEditingTask}
                        />}
                    {isDeletingTask &&
                        <DeleteTaskCard
                            getAllTasks={getTasks}
                            deletedTaskId={deletedTask}
                            setIsDeletingTask={setIsDeletingTask}
                        />}
                    {!isDeletingTask && !isEditingTask && < div >
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
                                                        className="btn-small red accent-4 logout"
                                                        onClick={() => deleteTask(task.id)}
                                                    >
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
                    }
                </div>
            </div>
        </div >
    )
}

export default Home;