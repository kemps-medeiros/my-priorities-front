import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";
import api from "../../services/api";

import "./style.css";

interface EditProps {
    getAllTasks: (id: string) => Promise<void>;
    taskId: string;
    setIsEditingTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTaskForm: React.FC<EditProps> = (props) => {
    const context = useContext(AuthContext);

    const [newEditedDescritpion, setNewEditedDescription] = useState('');
    const [newEditedPriorityLevel, setNewEditedPriorityLevel] = useState(50);

    useEffect(() => {

        api.get(`/api/priorities/${props.taskId}`,
            { headers: { 'Authorization': `Bearer ${context.token}` } }
        ).then(response => {
            setNewEditedDescription(response.data.description);
            setNewEditedPriorityLevel(response.data.prioritie_level)
        });

    }, [props.taskId])

    async function handleEdit() {
        try {
            console.log(props.taskId);
            const response = await api.put(`/api/priorities/${props.taskId}`, {

                description: newEditedDescritpion,
                prioritie_level: newEditedPriorityLevel,

            },
                { headers: { 'Authorization': `Bearer ${context.token}` } }
            );
            await props.getAllTasks(context.idUser);
            props.setIsEditingTask(false);
            alert('task updated successfully');
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
                            <h5>Edit Task</h5>
                        </div>
                        <div className="card-content left-align">
                            <div className="form-field">
                                <label htmlFor="description" >Description</label>
                                <input
                                    autoFocus
                                    type="text"
                                    id="description"
                                    value={newEditedDescritpion}
                                    onChange={event => setNewEditedDescription(event.target.value)
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
                                    value={newEditedPriorityLevel}
                                    onChange={event => setNewEditedPriorityLevel(parseInt(event.target.value))}
                                />
                            </div>
                            <div className="form-field right-align">
                                <div className="left">
                                    <h6 className="level">Level: {newEditedPriorityLevel}</h6>
                                </div>
                                <button
                                    className="btn-large green accent-4 login"
                                    onClick={handleEdit}
                                >
                                    Update Task!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EditTaskForm;