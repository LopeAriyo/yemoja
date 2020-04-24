import React from "react";

import CycleWheel from "./CycleWheel";
import Forecast from "./Forecast";

const CurrentCycle = () => {
    return (
        <div className="cycle-container">
            <Forecast />
            <CycleWheel />
            <button>Track Period</button>
        </div>
    );
};

export default CurrentCycle;
