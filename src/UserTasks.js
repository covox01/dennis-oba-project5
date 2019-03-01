import React from 'react';

class UserTask extends Component {
    constructor() {
        super();
        this.state = {
            userTask: ''
        }
    }
    handleClick = () => {
        this.setState({
            userTask: this.state.usertask
        })
    }
    render() {
        return (
            <div>
                <div>Task 1 {this.handleClick}</div>
            </div>
        )
    }
}

export default UserTask;