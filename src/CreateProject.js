import React, { Component } from 'react';
import firebase from './firebase.js';
import TaskMaster from './TaskMaster.js';
import './styles/createProject.css';
import './styles/mainApp.css';
// import './styles/fonts.css';


class CreateProject extends Component {
    constructor(){
        super();
        this.state = {
            projectName: '',
            userName: '',
            description: '',
            tasks: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    //Triggers the submit button
    handleSubmit = (e) => {
        // console.log(this.state.userName);
        e.preventDefault();
        const dbRef = firebase.database().ref()
        const userProjects = firebase.database().ref('User Projects');
        userProjects.push(this.state);
        console.log('submitted');
        this.setState({
            projectName: '',
            userName: '',
            description: '',
        })
    }

    componentDidMount(){
        const dbRef = firebase.database().ref();
        console.log("component did mount")
        dbRef.on('value', res => {
            const newState = [];
            const data = res.val();
            // for (let key in data) {
            //     newState.push({
            //         key: key,
            //         tasks: data[key]
            //     })
            // }
        })
    }

    render(){
        return (
            <form action="submit" className="projectForm" onSubmit={this.handleSubmit}>
                {/* Input Project Name */}
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
                            className="userNameInput" name="userName"
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
        )
    }

}

export default CreateProject;