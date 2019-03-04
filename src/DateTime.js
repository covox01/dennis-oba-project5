import React, { Component } from 'react';
import './styles/dateTime.css';
import './styles/mainApp.css';


class DateTime extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            time: ''
        }
    }

    componentDidMount = () => {
        // This get's today's date
        const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const thisMonth = monthName[month - 1];
        // This get's the time
        const time = new Date();
        const thisHour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        const minutes = time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes();
        const amPm = thisHour < 12 ? 'am' : 'pm';
        this.setState({
            date: `${thisMonth} ${day}, ${year}`,
            time: `${thisHour}:${minutes}:${amPm}`
        })
    }

    render() {
        return (
            <div className="dateTimeContainer">
                <div className="dateTimer">
                    <div className="date">{this.state.date}</div>
                    <div className="time">{this.state.time}</div>
                </div>
            </div>
        )
    }
}

export default DateTime;