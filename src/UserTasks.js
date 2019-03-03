import React, { Component } from 'react';
import firebase from './firebase.js';

class UserTasks extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleClick = () => {
        this.setState({
            userTask: this.state.usertask
        })
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        console.log("component did mount")
        dbRef.on('value', res => {
            // console.log(res.val());
            // const newState = [];
            // const data = res.val();
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
            <div>
                <div>Task 1</div>
            </div>
        )
    }
}

export default UserTasks;