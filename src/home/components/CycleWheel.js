import React, { useState } from "react";
import CycleSlider from "./CycleSlider";
import CycleCard from "./CycleCard";
import Modal from "../../layout/components/modal/Modal";

const CycleWheel = props => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleFormOpen = () => {
        setIsFormOpen(true);
    };

    const handleFormClose = () => {
        setIsFormOpen(false);
    };

    return (
        <React.Fragment>
            {isFormOpen && (
                <Modal handleClose={handleFormClose} headerTitle={"Track"} />
            )}
            <div className="cycle-wheel">
                <CycleSlider
                    value1={props.cycleDay}
                    setValue1={props.setCycleDay}
                    cycleLength={props.actualCycleLength}
                />
                <CycleCard
                    cycleDay={props.cycleDay}
                    cycleArray={props.cycleArray}
                    periodArray={props.periodArray}
                    actualCycleLength={props.actualCycleLength}
                    cycleStatus={props.getCycleStatus}
                    periodStatus={props.getPeriodStatus}
                    getCycleDayDate={props.getCycleDayDate}
                />
            </div>
            <button
                className="tracking-button"
                disabled={!props.isTrackable(props.cycleDay, props.cycleArray)}
                onClick={handleFormOpen}
            >
                {props.isTrackable(props.cycleDay, props.cycleArray) ===
                true ? (
                    <p>Enter today's data</p>
                ) : (
                    <p>You can only input data for today</p>
                )}
            </button>
        </React.Fragment>
    );
};

export default CycleWheel;
