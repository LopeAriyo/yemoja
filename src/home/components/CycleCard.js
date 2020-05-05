import React from "react";

const CycleCard = props => {
    return (
        <div className="cycle-card">
            <p className="active-cycle-date">
                {props.getCycleDayDate(props.cycleDay, props.cycleArray)}
            </p>
            <div className="cycle-day-display">
                <p>Day</p>{" "}
                <h1 className="active-cycle-day">
                    {Math.floor(props.cycleDay)}
                </h1>
            </div>
            <p>
                {props.periodStatus(
                    props.cycleDay,
                    props.periodArray,
                    props.cycleArray
                ) !== false
                    ? props.periodStatus(
                          props.cycleDay,
                          props.periodArray,
                          props.cycleArray
                      )
                    : props.cycleStatus(props.cycleDay)}
            </p>
            {/* <button>Enter/Modify Today's Data</button>
                <p>No data for today/There is already data for today</p> */}
        </div>
    );
};

export default CycleCard;
