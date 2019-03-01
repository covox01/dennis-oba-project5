import React, { Component } from 'react';
import firebase from 'firebase';
import './styles/createProject.css';
// import './styles/fonts.css';


class CreateProject extends Component {
    constructor(){
        super();
        this.state = {
            projectName: '',
            userName: '',
            description: ''
        }
    }

    handleSubmit = (e) => {
        console.log(e)
    }
    render(){
        return (
            <form action="submit" className="projectForm">
                {/* Input Project Name */}
                {/* <label htmlFor="projectName">Enter Project Name</label> */}
                <input  type="text" 
                        id="projectName" 
                        className="projectName"
                        name="projectName"
                        placeholder="Project X"
                         />
                <div className="line decor1"></div>
                {/* Input User Name */}
                {/* <label htmlFor="userName">Enter</label> */}
                <input  type="text" 
                        id="userNameInput"
                        className="userNameInput" name="userNameInput"
                        placeholder="Enter Contributer" 
                         />
                <div className="line decor2"></div>
                {/* Input Description */}
                {/* <label htmlFor="">Project Description</label> */}
                <textarea name="projectDescription" id="" cols="30" rows="10" placeholder="Description"></textarea>
                <button ></button>
            </form>
        )
    }

}

export default CreateProject;