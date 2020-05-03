import React from "react";
import CycleSlider from "./CycleSlider";

const CycleWheel = props => {
    return (
        <div className="cycle-wheel">
            <CycleSlider cycleLength={props.cycleLength} />
            <div className="cycle-card">
                Day <h1>28</h1>
            </div>
        </div>
    );
};

export default CycleWheel;
