import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/auth";
import api from "../../services/api";

import "./style.css";

interface FuncProps {
    getAllTasks: (id: string) => Promise<void>;
    setIsAddingNewTask: React.Dispatch<React.SetStateAction<boolean>>;
}


const NewTaskForm: React.FC<FuncProps> = (props) => {
    const context = useContext(AuthContext);
    const [newDescritpion, setNewDescription] = useState('');
    const [newPriorityLevel, setNewPriorityLevel] = useState(50);

    async function handleAdd() {

        try {
            const response = await api.post('/api/priorities', {

                description: newDescritpion,
                prioritie_level: newPriorityLevel,
                user_id: context.idUser,

            },
                { headers: { 'Authorization': `Bearer ${context.token}` } }
            );

            await props.getAllTasks(context.idUser);
            setNewDescription('')
            setNewPriorityLevel(50);
            props.setIsAddingNewTask(false);
            alert('task registered successfully')

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <div className="row mt-50">
                <div className="col s12 l8 offset-l2">
                    <div className="card">
                        <div className="card-action pink darken-4 white-text center">
                            <h5>Add New Task</h5>
                        </div>
                        <div className="card-content left-align">
                            <div className="form-field">
                                <label htmlFor="description" >Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    value={newDescritpion}
                                    onChange={event => setNewDescription(event.target.value)
                                    }
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="priority" >Priority</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    id="priority"
                                    value={newPriorityLevel}
                                    onChange={event => setNewPriorityLevel(parseInt(event.target.value))}
                                />
                            </div>
                            <div className="form-field right-align">
                                <div className="left">
                                    <h6 className="level">Level: {newPriorityLevel}</h6>
                                </div>
                                <button
                                    className="btn-large green accent-4 login"
                                    onClick={handleAdd}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewTaskForm;