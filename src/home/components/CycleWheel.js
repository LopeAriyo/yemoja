import React from "react";
import CycleSlider from "./CycleSlider";
import CycleCard from "./CycleCard";

class CycleWheel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="cycle-wheel">
                    <CycleSlider
                        value1={this.props.cycleDay}
                        setValue1={this.props.setCycleDay}
                        cycleLength={this.props.actualCycleLength}
                    />
                    <CycleCard
                        cycleDay={this.props.cycleDay}
                        cycleArray={this.props.cycleArray}
                        periodArray={this.props.periodArray}
                        actualCycleLength={this.props.actualCycleLength}
                        cycleStatus={this.props.getCycleStatus}
                        periodStatus={this.props.getPeriodStatus}
                        getCycleDayDate={this.props.getCycleDayDate}
                    />
                </div>
            </React.Fragment>
        );
    }
}
export default CycleWheel;
