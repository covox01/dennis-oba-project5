import React, { Component } from 'react';
import firebase from 'firebase';
import './styles/createProject.css';
import './styles/mainApp.css';
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
                <div className="title">
                    <h1>TaskMaster</h1>
                </div>
                <div className="input1 inputStyle">
                    <label htmlFor="projectName">Project:</label>
                    <input  type="text" 
                            id="projectName" 
                            className="projectName"
                            name="projectName"
                            placeholder=""
                            required/>
                </div>
                    <div className="line decor1"></div>
                {/* Input User Name */}
                <div className="input2 inputStyle">
                    <label htmlFor="userNameInput">Contributor:</label>
                    <input  type="text" 
                            id="userNameInput"
                            className="userNameInput" name="userNameInput"
                            placeholder="" 
                            required/>
                </div>
                <div className="line decor2"></div>
                {/* Input Description */}
                <div className="input3 inputStyle">
                    <label htmlFor="">Description:</label>
                    <input type="text"
                        class="projectDescription"
                        name="projectDescription"
                        id="projectDescription" cols="30" rows="5"
                        placeholder=""
                        required />
                </div>
                <div className="line decor3"> </div>
                <button></button>
            </form>
            
        )
    }

}

export default CreateProject;