import React from "react";

import Greeting from "../components/Greeting";
import CycleContainer from "../components/CycleContainer";

const Cycle = props => {
    const currentCycle = {
        id: 4,
        is_cycle_active: true,
        // start_date: "03/31/2020",
        start_date: "04/29/2020",
        // start_date: "05/04/2020",
        cycle_length: null,
        period_length: 5,
        user_id: 1,
    };
    return (
        <main>
            {/* <BackgroundIcon /> */}
            <Greeting user={props.user} />
            <CycleContainer
                currentCycle={currentCycle}
                estimatedPeriodLength={props.user.estimated_period_length}
                estimatedCycleLength={props.user.estimated_cycle_length}
            />
        </main>
    );
};

export default Cycle;
