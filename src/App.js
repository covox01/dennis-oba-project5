import React, { Component } from 'react';
import CreateProject from './CreateProject.js';
import ProjectOverview from './ProjectOverview';
import TaskMaster from './TaskMaster.js';
import Hub from './Hub.js';
import DateTime from './DateTime.js'
import './App.css';
import './styles/mainApp.css';




// Component starts
class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     projectName: '',
  //     userName: '',
  //     description: '',
  //     tasks: []
  //   }
  // }

  // handleChange = (e) => {
  //   this.setState({

  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userProjects = firebase.database().ref('User Projects');
  //   userProjects.push(this.state);
  //   console.log('submitted')
  //   this.setState({
  //     projectName: '',
  //     userName: '',
  //     description: ''
  //   })
  // }

  render() {
    return (
      <div className="App superContainer">
        <div className="appContainer">
          <DateTime />
          <CreateProject />
          <TaskMaster />
          <ProjectOverview />
          <Hub />
          {/* <TaskMaster /> */}
        </div>
      </div>
    );
  }
}

export default App;
