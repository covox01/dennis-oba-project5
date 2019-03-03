import React, { Component } from 'react';
import firebase from './firebase.js';
import UserTasks from './UserTasks.js';
import './styles/taskMaster.css';

class TaskMaster extends Component {
    constructor(){
        super();
        this.state = {
            tasks: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userProjects = firebase.database().ref()
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        console.log("component did mount")
        dbRef.on('value', res => {
            // console.log(res.val());
            // const newState = [];
            // const data = res.val();
            // for (let key in data) {
            //     newState.push({
            //         key: key,
            //         tasks: data[key]
            //     })
            // }
        }) 
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
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li>
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li>
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li>
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li> 
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li>
                    <li className="taskItem">
                        <span>Get project to push into firebase</span>
                    </li> 
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
                            placeholder="input project task"
                             />
                </form>  
            </div>
        )
    }
}

export default TaskMaster;