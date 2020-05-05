import React from "react";

import CycleWheel from "./CycleWheel";
import Forecast from "./Forecast";

class CycleContainer extends React.Component {
    state = {
        cycleDay: 0,
        forecastCycleDay: 0,
        actualCycleLength: 0,
    };

    getCycleDay = () => {
        const date1 = new Date();
        const date2 = new Date(this.props.currentCycle.start_date);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return new Promise(resolve =>
            this.setState(
                { cycleDay: diffDays, forecastCycleDay: diffDays },
                resolve
            )
        );
    };

    setCycleDay = cycleDay => {
        this.setState({
            cycleDay,
        });
    };

    getActualCycleLength = () => {
        //the length of the cycle can be based on the user estimated cycle length
        // but if the period is late, then the cycle length increase based on the difference of the cycle start date to today's date
        const cycleLength =
            this.props.estimatedCycleLength > this.state.cycleDay
                ? this.props.estimatedCycleLength
                : this.state.cycleDay;

        return new Promise(resolve =>
            this.setState({ actualCycleLength: cycleLength }, resolve)
        );
    };

    componentDidMount() {
        this.getCycleDay().then(() => this.getActualCycleLength());
    }

    render() {
        if (this.props.currentCycle === null) {
            return (
                <div className="cycle-container">
                    {" "}
                    <p>No cycles found. Please add cycle data.</p>
                    <button>Add Cycles</button>{" "}
                </div>
            );
        }
        return (
            <div className="cycle-container">
                <Forecast
                    cycleDay={this.state.forecastCycleDay}
                    actualCycleLength={this.state.actualCycleLength}
                />
                <CycleWheel
                    cycleDay={this.state.cycleDay}
                    setCycleDay={this.setCycleDay}
                    currentCycle={this.props.currentCycle}
                    periodLength={this.props.periodLength}
                    actualCycleLength={this.state.actualCycleLength}
                />
                <button>Enter Today's Data</button>
                <p>No data for today</p>
                {/* <button>Modify Today's Data</button>
                <p>There is already data for today</p> */}
            </div>
        );
    }
}
export default CycleContainer;
