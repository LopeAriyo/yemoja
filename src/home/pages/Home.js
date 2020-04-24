import React from "react";

import Greeting from "../components/Greeting";
import CurrentCycle from "../components/CurrentCycle";

const Home = props => {
    return (
        <div>
            {/* <BackgroundIcon /> */}
            <Greeting user={props.user} />
            <CurrentCycle />
        </div>
    );
};

export default Home;
