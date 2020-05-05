import React from "react";

const CycleCard = props => {
    return (
        <div className="cycle-card">
            <p>Day</p> <h1>{Math.floor(props.cycleDay)}</h1>
        </div>
    );
};

export default CycleCard;
