import React, { useContext, useEffect } from "react";
import AuthContext from "../../contexts/auth";
import api from "../../services/api";

import "./style.css";


const NewTaskForm: React.FC = () => {
    const context = useContext(AuthContext);

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
                                // onChange={event => context.setEmail(event.target.value)} 
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="priority" >Priority</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    id="priority"
                                // onChange={event => context.setPassword(event.target.value)} 
                                />
                            </div>
                            <div className="form-field right-align">
                                <button
                                    className="btn-large green accent-4 login"
                                // onClick={handleAdd}
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