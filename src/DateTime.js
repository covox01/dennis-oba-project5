import React, { Component } from 'react';
import './styles/dateTime.css';
import './styles/mainApp.css';

class DateTime extends Component {
    render() {
        return (
            <div className="dateTimeContainer">
                <div className="dateTimer">
                    <div className="date">February 13, 2017</div>
                    <div className="time">12:55am</div>
                </div>
            </div>
        )
    }
}

export default DateTime;