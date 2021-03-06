import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import './styles/taskMaster.css';
import './styles/projectOverview.css';
import './styles/createProject.css';
import './styles/mainApp.css';
import ProjectOverview from './ProjectOverview.js';

class TaskMaster extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: [],
            userTask: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userTasks = firebase.database().ref('Tasks')
        userTasks.push(this.state.userTask)
        this.setState({
            userTask: '',
        })
    }

    componentDidMount(){
        const userTasks = firebase.database().ref('Tasks');
        userTasks.on('value', res => {
            console.log(res.val());
            const newState= [];
            const data = res.val();
            for (let key in data) {
                newState.push({
                    key: key,
                    task: data[key],
                    complete: false
                })
            }
            this.setState({
                task: newState,
            })
            console.log(newState);
        })
    }

    completeTask = (task) => {
        console.log(task);
        const dbRef = firebase.database().ref(task);
        console.log(dbRef);
        dbRef.remove();
    }

    render() {
        return (
            <Fragment>
                <ProjectOverview />
                <div className="tasker">
                    <ul className="taskLog">
                        {
                            this.state.task.map((picked) => {
                                return <li  key={picked.key} 
                                            className="taskItem"
                                            onClick={() => {this.completeTask(picked.key)}}>
                                            <span>{picked.task}</span>
                                        </li>
                            })
                        }
                        
                    </ul>
                    <form action="submit" className="taskInput" onSubmit={this.handleSubmit}>
                        <input  type="text" 
                                className="taskInputItem"
                                name="userTask"
                                placeholder="input project task"
                                value={this.state.userTask}
                                onChange={this.handleChange}
                                />
                    </form>  
                </div>
            </Fragment>
        )
    }
}

export default TaskMaster;