import React from "react";
import CycleSlider from "./CycleSlider";
import CycleCard from "./CycleCard";

class CycleWheel extends React.Component {
    state = {
        // cycleStartDate: new Date(this.props.currentCycle.start_date),
    };

    // createCycle = () => {
    //     //using an array to represent the user's cycle

    //     const cycle = [];

    //     for (let days = 0; days < length; days++) {
    //         this.state.cycleStartDate.setDate(
    //             this.state.cycleStartDate.getDate() + days
    //             // i represents a number of days and adds that to the original day
    //         );

    //         var day = this.state.cycleStartDate.getDate(); //numerical day
    //         var month = this.state.cycleStartDate.getMonth() + 1;
    //         var year = this.state.cycleStartDate.getFullYear();

    //         const date = new Date(year, month - 1, day); // 2009-11-10

    //         const formattedMonth = date.toLocaleString("default", {
    //             month: "short",
    //         });

    //         var formattedCycleDate = {
    //             displayDate: formattedMonth + " " + day,
    //             referenceDate: { day: day, month: month, year: year },
    //         };

    //         cycle.push(formattedCycleDate);

    //         this.state.cycleStartDate.setDate(
    //             this.state.cycleStartDate.getDate() - i
    //             // resets the date back to the original day
    //         );
    //     }
    //     return new Promise(resolve =>
    //         this.setState({ cycleArray: cycle }, resolve)
    //     );
    // };

    componentDidMount() {
        // this.createCycle();
        // .then(() => this.createPeriod());
    }

    render() {
        return (
            <div className="cycle-wheel">
                <CycleSlider
                    value1={this.props.cycleDay}
                    setValue1={this.props.setCycleDay}
                    cycleLength={this.props.actualCycleLength}
                />
                <CycleCard cycleDay={this.props.cycleDay} />
            </div>
        );
    }
}
export default CycleWheel;
