import React, { Component } from 'react';
import './styles/taskMaster.css';

class TaskMaster extends Component {
    constructor(){
        super();
        this.state = {
            tasks: []
        }
    }

    render() {
        return (
            <div className="tasker">
                <ul className="taskLog">
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li>
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li>     
                </ul>
                <form action="submit" className="taskInput">
                    <input  type="text" 
                            className="taskInputItem"
                            placeholder="input project task" />
                </form>  
            </div>
        )
    }
}

export default TaskMaster;