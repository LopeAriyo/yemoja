import React from "react";

import Greeting from "../components/Greeting";
import CycleContainer from "../components/CycleContainer";

const Home = props => {
    return (
        <main>
            {/* <BackgroundIcon /> */}
            <Greeting user={props.user} />
            <CycleContainer
                cycles={["cycle1", "cycle2"]}
                periodLength={props.user.estimated_period_length}
                cycleLength={props.user.estimated_cycle_length}
            />
        </main>
    );
};

export default Home;
