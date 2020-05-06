import React from "react";

import CycleWheel from "./CycleWheel";
import Forecast from "./Forecast";

class CycleContainer extends React.Component {
    state = {
        cycleDay: 1,
        forecastCycleDay: 1,
        actualCycleLength: 1,
        cycleArray: [],
        actualPeriodLength: 1,
        periodArray: [],
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

    getActualLengths = () => {
        //the length of the cycle can be based on the user estimated cycle length
        // but if the period is late, then the cycle length increase based on the difference of the cycle start date to today's date
        const cycleLength =
            this.props.estimatedCycleLength > this.state.cycleDay
                ? this.props.estimatedCycleLength
                : this.state.cycleDay;

        return new Promise(resolve =>
            this.setState(
                {
                    actualCycleLength: cycleLength,
                    actualPeriodLength: this.props.currentCycle.period_length,
                },
                resolve
            )
        );
    };

    createCycle = () => {
        const cycle = [];
        const period = [];
        const cycleLength = this.state.actualCycleLength;
        const periodLength = this.state.actualPeriodLength;

        const startDate = new Date(this.props.currentCycle.start_date);

        for (let cycleDays = 0; cycleDays < cycleLength; cycleDays++) {
            startDate.setDate(startDate.getDate() + cycleDays);

            const day = startDate.getDate(); //numerical day
            const month = startDate.getMonth() + 1;
            const year = startDate.getFullYear();

            const date = new Date(year, month - 1, day); // 2009-11-10

            const formattedMonth = date.toLocaleString("default", {
                month: "short",
            });

            const formattedCycleDate = {
                displayDate: formattedMonth + " " + day,
                referenceDate: { day: day, month: month, year: year },
            };

            cycle.push(formattedCycleDate);

            startDate.setDate(
                startDate.getDate() - cycleDays
                // resets the date back to the original day
            );
        }

        for (let cycleDays = 0; cycleDays < periodLength; cycleDays++) {
            startDate.setDate(startDate.getDate() + cycleDays);

            const day = startDate.getDate(); //numerical day
            const month = startDate.getMonth() + 1;
            const year = startDate.getFullYear();

            const date = new Date(year, month - 1, day); // 2009-11-10

            const formattedMonth = date.toLocaleString("default", {
                month: "short",
            });

            const formattedCycleDate = {
                displayDate: formattedMonth + " " + day,
                referenceDate: { day: day, month: month, year: year },
            };

            period.push(formattedCycleDate);

            startDate.setDate(
                startDate.getDate() - cycleDays
                // resets the date back to the original day
            );
        }
        return new Promise(resolve =>
            this.setState({ cycleArray: cycle, periodArray: period }, resolve)
        );
    };

    getPeriodStatus = (cycleDay, period, cycle) => {
        const activeCycleDay = Math.floor(cycleDay);
        if (period[activeCycleDay - 1]) {
            let date1 = new Date(
                period[activeCycleDay - 1].referenceDate.year,
                period[activeCycleDay - 1].referenceDate.month - 1,
                period[activeCycleDay - 1].referenceDate.day
            );
            let date2 = new Date(
                cycle[activeCycleDay - 1].referenceDate.year,
                cycle[activeCycleDay - 1].referenceDate.month - 1,
                cycle[activeCycleDay - 1].referenceDate.day
            );

            if (date1.toDateString() === date2.toDateString()) {
                if (this.props.estimatedPeriodLength - activeCycleDay === 0) {
                    return "Period ends today!";
                } else if (
                    this.props.estimatedPeriodLength - activeCycleDay ===
                    1
                ) {
                    return "Period ends tomorrow!";
                } else {
                    return (
                        "Period ends in " +
                        (this.props.estimatedPeriodLength - activeCycleDay) +
                        " days"
                    );
                }
            }
        }
        return false;
    };

    getCycleStatus = cycleDay => {
        const periodDueDate =
            this.state.actualCycleLength - Math.floor(cycleDay);

        if (periodDueDate >= 2) {
            return "Period starts in " + periodDueDate + " days";
        } else if (periodDueDate === 1) {
            return "Period starts tomorrow";
        } else {
            return "Period starts today";
        }
    };

    getCycleDayDate = (cycleDay, cycle) => {
        const activeCycleDay = Math.floor(cycleDay);
        if (cycle[activeCycleDay - 1]) {
            return cycle[activeCycleDay - 1].displayDate;
        }
    };

    isTrackable = (cycleDay, cycle) => {
        const activeCycleDay = Math.floor(cycleDay);
        if (cycle[activeCycleDay]) {
            let date1 = new Date();
            let date2 = new Date(
                cycle[activeCycleDay - 1].referenceDate.year,
                cycle[activeCycleDay - 1].referenceDate.month - 1,
                cycle[activeCycleDay - 1].referenceDate.day
            );

            if (date1.toDateString() === date2.toDateString()) {
                return true;
            } else {
                return false;
            }
        }
    };

    componentDidMount() {
        this.getCycleDay()
            .then(() => this.getActualLengths())
            .then(() => this.createCycle());
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
                    actualCycleLength={this.state.actualCycleLength}
                    getCycleStatus={this.getCycleStatus}
                    getPeriodStatus={this.getPeriodStatus}
                    cycleArray={this.state.cycleArray}
                    periodArray={this.state.periodArray}
                    getCycleDayDate={this.getCycleDayDate}
                />
                <button
                    className="tracking-button"
                    disabled={
                        !this.isTrackable(
                            this.state.cycleDay,
                            this.state.cycleArray
                        )
                    }
                >
                    {this.isTrackable(
                        this.state.cycleDay,
                        this.state.cycleArray
                    ) === true ? (
                        <p>Enter today's data</p>
                    ) : (
                        <p>You can only input data for today</p>
                    )}
                </button>
            </div>
        );
    }
}
export default CycleContainer;
