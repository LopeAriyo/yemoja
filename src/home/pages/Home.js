import React from "react";

import Greeting from "../components/Greeting";
import CycleContainer from "../components/CycleContainer";

const Home = props => {
    return (
        <main>
            {/* <BackgroundIcon /> */}
            <Greeting user={props.user} />
            <CycleContainer
                currentCycle={props.currentCycle}
                periodLength={props.user.estimated_period_length}
                estimatedCycleLength={props.user.estimated_cycle_length}
            />
        </main>
    );
};

export default Home;
