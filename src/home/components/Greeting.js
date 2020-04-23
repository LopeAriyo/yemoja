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
        // const { first_name } = this.props.user;
        const currentDateTime = new Date();
        const timeOfDay = this.getTimeOfDay(currentDateTime);

        return (
            <div>
                {/* <SunIcon /> */}
                <h4 className="light-text"> {timeOfDay}, </h4>
                {/* <h4 className="white-text"> {first_name}</h4> */}
                <h5 className="white-text">
                    {" "}
                    <div>
                        <Moment format="dddd," />
                        <br></br>
                        <Moment format="DD MMMM" />
                    </div>
                </h5>
            </div>
        );
    }
}

export default Greeting;
