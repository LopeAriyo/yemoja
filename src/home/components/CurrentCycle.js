import React from "react";

import CycleSlider from "../components/CycleSlider";
import Forecast from "../components/Forecast";

const CurrentCycle = () => {
    return (
        <div className="cycle-container">
            <Forecast />
            <CycleSlider />
            <button>Enter Data</button>
        </div>
    );
};

export default CurrentCycle;
