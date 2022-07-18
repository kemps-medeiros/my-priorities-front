import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";
import api from "../../services/api";

import "./style.css";

interface DeleteProps {
    getAllTasks: (id: string) => Promise<void>;
    deletedTaskId: string;
    setIsDeletingTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTaskCard: React.FC<DeleteProps> = (props) => {
    const context = useContext(AuthContext);

    async function handleDelete() {
        try {
            await api.delete(`/api/priorities/${props.deletedTaskId}`,
                { headers: { 'Authorization': `Bearer ${context.token}` } }
            );
            await props.getAllTasks(context.idUser);
            await props.setIsDeletingTask(false);
            alert('task deleted successfully');

        } catch (error) {
            console.log(error)
        }
    }

    function handleNoDelete() {
        props.setIsDeletingTask(false);
    }

    return (
        <div>
            <div className="row mt-50">
                <div className="col s12 l8 offset-l2">
                    <div className="card">
                        <div className="card-action pink darken-4 white-text center">
                            <h5>Delete</h5>
                        </div>
                        <div className="card-content center">
                            <div className="form-field">
                                <h5>Are you sure you want delete this task???</h5>
                                {/* <input
                                type=
                                    // autoFocus
                                /> */}
                            </div>

                            <div className="row">
                                <button
                                    className="btn-large green accent-4 login"
                                    onClick={handleDelete}
                                >
                                    Yes
                                </button>
                                <button
                                    className="btn-large red accent-4 login ml-15 logout"
                                    onClick={handleNoDelete}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DeleteTaskCard;