import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import ProjectOverview from './ProjectOverview.js';
import './styles/createProject.css';
import './styles/mainApp.css';


class CreateProject extends Component {
    constructor(){
        super();
        this.state = {
            projectName: '',
            userName: '',
            description: '',
            task: []
        }
    }
    // This gives value to the state from the targetted input
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Triggers the submit button
    handleSubmit = (e) => {
        e.preventDefault();
        const userProjects = firebase.database().ref('User Projects');
        userProjects.push(this.state);
        this.setState({
            projectName: '',
            userName: '',
            description: '',
        })
    }


    render(){
        return (
            <Fragment>
                <ProjectOverview    projextName={this.state.projectName} 
                                    userName={this.state.userName}
                                    description={this.state.description}
                                    
                                    />
                <form action="submit" className="projectForm" onSubmit={this.handleSubmit}>
                    <div className="title">
                        <h1>TaskMaster</h1>
                        <button className="create">create</button>
                    </div>
                    <div className="input1 inputStyle">
                        <label htmlFor="projectName">Project:</label>
                        <input  type="text" 
                                id="projectName" 
                                className="projectName"
                                name="projectName"
                                value={this.state.projectName}
                                onChange={this.handleChange}
                                required/>
                    </div>
                        <div className="line decor1"></div>
                    {/* Input User Name */}
                    <div className="input2 inputStyle">
                        <label htmlFor="userNameInput">Contributor:</label>
                        <input  type="text" 
                                id="userNameInput"
                                className="userNameInput" 
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange}
                                required/>
                    </div>
                    <div className="line decor2"></div>
                    {/* Input Description */}
                    <div className="input3 inputStyle">
                        <label htmlFor="projectDescription">Description:</label>
                        <input type="text"
                            className="projectDescription"
                            name="description"
                            id="projectDescription"
                            value={this.state.description} 
                            onChange={this.handleChange} 
                            required/>
                    </div>
                    <div className="line decor3"> </div>
                </form>
            </Fragment>
        )
    }

}

export default CreateProject;