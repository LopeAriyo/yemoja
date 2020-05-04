import React from "react";

import CycleWheel from "./CycleWheel";
import Forecast from "./Forecast";

const CycleContainer = props => {
    if (props.cycles.length === 0) {
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
            <Forecast />
            <CycleWheel
                periodLength={props.periodLength}
                cycleLength={props.cycleLength}
            />
            <button>Enter Today's Data</button>
            <p>No data for today</p>
            {/* <button>Modify Today's Data</button>
            <p>There is already data for today</p> */}
        </div>
    );
};

export default CycleContainer;
