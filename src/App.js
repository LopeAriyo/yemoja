import React, { useState, useCallback, useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Layout from "./shared/Layout";
import "./shared/main.scss";

import RouteWithTitle from "./shared/components/navigation/RouteWithTitle";
import Cycle from "./home/pages/Cycle";
import Calendar from "./calendar/Calendar";
import Profile from "./users/pages/Profile";

import Welcome from "./users/pages/Welcome";
import SignIn from "./users/pages/SignIn";
import SignUp from "./users/pages/SignUp";

import AuthContext from "./shared/context/auth-context";

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signin = useCallback(() => {
        setIsSignedIn(true);
    }, []);

    const signout = useCallback(() => {
        setIsSignedIn(false);
    }, []);

    const auth = useContext(AuthContext);

    let currentUser;
    let currentCycle;

    if (isSignedIn) {
        currentUser = {
            id: 1,
            first_name: "Test User",
            last_name: "Ariyo",
            email: "testuser@yemoja.com",
            estimated_period_length: 5,
            estimated_cycle_length: 30,
        };

        currentCycle = {
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
    }

    return (
        <AuthContext.Provider
            value={{ isSignedIn: isSignedIn, signIn: signin, signOut: signout }}
        >
            <Router>
                {isSignedIn ? (
                    <Layout>
                        <Switch>
                            <RouteWithTitle
                                title={"Cycle"}
                                exact={true}
                                path="/"
                                component={props => (
                                    <Cycle
                                        {...props}
                                        user={currentUser}
                                        currentCycle={currentCycle}
                                    />
                                )}
                            />
                            <RouteWithTitle
                                title={"Calendar"}
                                exact={true}
                                path="/calendar"
                                component={props => (
                                    <Calendar
                                        {...props}
                                        pageTitle={"Calendar"}
                                    />
                                )}
                            />
                            <RouteWithTitle
                                title={"Profile"}
                                exact={true}
                                path="/profile"
                                component={props => (
                                    <Profile
                                        {...props}
                                        user={currentUser}
                                        pageTitle={"Profile"}
                                    />
                                )}
                            />
                            <Redirect to="/" />
                        </Switch>
                    </Layout>
                ) : (
                    <Switch>
                        <Route
                            exact
                            path="/welcome"
                            component={props => <Welcome {...props} />}
                        />
                        <Route
                            path="/signup"
                            component={props => <SignUp {...props} />}
                        />
                        <Route
                            path="/signin"
                            component={props => <SignIn {...props} />}
                        />{" "}
                        <Redirect to="/welcome" />
                    </Switch>
                )}
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
