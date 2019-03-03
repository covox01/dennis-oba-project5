import React, { Component } from 'react';
// import firebase from './firebase.js';
import './App.css';
import './styles/mainApp.css';
import CreateProject from './CreateProject.js';
import TaskMaster from './TaskMaster.js';
import Hub from './Hub.js';
import DateTime from './DateTime.js'



// Component starts
class App extends Component {
  render() {
    return (
      <div className="App superContainer">
        <div className="appContainer">
          <DateTime />
          <CreateProject />
          <Hub />
          <TaskMaster />
        </div>
      </div>
    );
  }
}

export default App;
