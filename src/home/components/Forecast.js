import React from "react";

const Forecast = props => {
    return (
        <div>
            Day {props.cycleDay} of {props.actualCycleLength}
        </div>
    );
};

export default Forecast;
