import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Layout from "./layout/Layout";
import "./layout/main.scss";

import Home from "./home/pages/Home";
import Calendar from "./calendar/Calendar";
import Profile from "./users/pages/Profile";

const App = () => {
    const currentUser = {
        id: 1,
        first_name: "Lopè",
        last_name: "Ariyo",
        email: "lopeariyo@faker.com",
        estimated_period_length: 5,
        estimated_cycle_length: 30,
    };

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

    // let cycles = [
    //     {
    //         id: 4,
    //         is_cycle_active: true,
    //         start_date: "04/29/2020",
    //         end_date: null,
    //         period_length: 5,
    //         user_id: 1,
    //     },
    //     {
    //         id: 3,
    //         is_cycle_active: false,
    //         start_date: "03/31/2020",
    //         end_date: "04/28/2020",
    //         period_length: 3,
    //         user_id: 1,
    //     },
    //     {
    //         id: 2,
    //         is_cycle_active: false,
    //         start_date: "02/29/2020",
    //         end_date: "03/30/2020",
    //         period_length: 4,
    //         user_id: 1,
    //     },
    //     {
    //         id: 1,
    //         is_cycle_active: false,
    //         start_date: "01/31/2020",
    //         end_date: "02/28/2020",
    //         period_length: 4,
    //         user_id: 1,
    //     },
    // ];

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={props => (
                            <Home
                                {...props}
                                user={currentUser}
                                currentCycle={currentCycle}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/calendar"
                        component={props => <Calendar {...props} />}
                    />
                    <Route
                        exact
                        path="/profile"
                        component={props => (
                            <Profile {...props} user={currentUser} />
                        )}
                    />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
