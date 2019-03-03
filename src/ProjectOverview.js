import React, { Component } from 'react';
import firebase from './firebase.js';
import CreateProject from './CreateProject.js'
import './styles/projectOverview.css';

class ProjectOverview extends Component {
    render(){
        return (
            <section className="projectOverview">
                <div className="titleContainer">
                    <h1 className="ovTitle">Project Title</h1>
                </div>
                <div className="userNameContainer">
                    <h2 className="ovUserName">User: Name</h2>
                </div>
                <div className="descriptionContainer">
                    <h2 className="ovDescription">Description goes here</h2>
                </div>
                <div className="completedTaskContainer">
                    <div className="completedTasks"></div>
                </div>
            </section>
        )
    }
}

export default ProjectOverview;