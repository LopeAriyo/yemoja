import React from "react";

import Greeting from "../components/Greeting";
import CurrentCycle from "../components/CurrentCycle";

const Home = () => {
    return (
        <div>
            {/* <BackgroundIcon /> */}
            <Greeting />
            <CurrentCycle />
        </div>
    );
};

export default Home;
