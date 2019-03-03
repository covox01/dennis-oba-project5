import React, { Component } from 'react';
import firebase from './firebase.js';
import CreateProject from './CreateProject.js';
import ProjectOverview from './ProjectOverview';
import TaskMaster from './TaskMaster.js';
import Hub from './Hub.js';
import DateTime from './DateTime.js'
import './App.css';
import './styles/mainApp.css';




// Component starts
class App extends Component {
  render() {
    return (
      <div className="App superContainer">
        <div className="appContainer">
          <DateTime />
          <CreateProject />
          <ProjectOverview />
          <Hub />
          <TaskMaster />
        </div>
      </div>
    );
  }
}

export default App;
