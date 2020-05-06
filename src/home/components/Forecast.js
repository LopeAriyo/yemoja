import React from "react";

const Forecast = props => {
    return (
        <div className="cycle-forecast">
            {/* icon */}
            <p className="cycle-phase">
                {props.cycleDay / props.actualCycleLength > 0.5
                    ? "Luteal Phase"
                    : "Follicular Phase"}
            </p>
            <p>
                Day {props.cycleDay} of {props.actualCycleLength}
            </p>
        </div>
    );
};

export default Forecast;
