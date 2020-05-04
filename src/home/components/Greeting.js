import React from "react";
import Moment from "react-moment";

class Greeting extends React.Component {
    getTimeOfDay(currentDateTime) {
        const currentTime = currentDateTime.getHours();

        if (currentTime >= 6 && currentTime < 12) {
            return "Good morning";
        }

        if (currentTime >= 12 && currentTime < 15) {
            return "Good afternoon";
        }

        if (currentTime >= 15 && currentTime < 18) {
            return "Good evening";
        }

        if (
            (currentTime >= 18 && currentTime <= 23) ||
            (currentTime >= 0 && currentTime < 6)
        ) {
            return "Hello";
        }
    }

    render() {
        const { first_name } = this.props.user;
        const currentDateTime = new Date();
        const timeOfDay = this.getTimeOfDay(currentDateTime);

        return (
            <div className="greeting">
                <div className="message">
                    <h4 id="time-of-day">{timeOfDay}, </h4>{" "}
                    <h4 id="user-name">{first_name}</h4>
                </div>
                <div className="date">
                    {" "}
                    <h5>
                        <Moment format="dddd, DD MMMM" />
                    </h5>
                </div>
            </div>
        );
    }
}

export default Greeting;
