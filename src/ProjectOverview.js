import React, { Component } from 'react';
import './styles/projectOverview.css';
import './styles/createProject.css';
import './styles/mainApp.css';


class ProjectOverview extends Component {

    render(){
        return (
            <section className="projectOverview">
                <div className="titleContainer">
                    <h1 className="ovTitle">{this.props.projectName} Project X</h1>
                </div>
                <div className="line d1"></div>
                <div className="userNameContainer">
                    <h2 className="ovUserName">User: {this.props.userName}</h2>
                </div>
                <div className="line d2"></div>
                <div className="descriptionTitle">
                    <h2 className="ovDescription">Description:</h2>
                </div>
                <div className="line d3"></div>
                <div className="descriptionContainer">
                    <p className="ovDescription">{this.props.description}</p>
                </div>
                
                <div className="line d4"></div>
                {/* <div className="completedTaskContainer">
                    <h2 className="completedTasks">Completed</h2>
                </div> */}
            </section>
        )
    }
}


export default ProjectOverview;