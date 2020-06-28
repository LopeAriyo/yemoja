import React, { useState, useCallback, useEffect } from "react";
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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    // const [userPending, setUserPending] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    // const signin = useCallback(data => {
    const signin = useCallback(() => {
        setIsSignedIn(true);
        // console.log(data);
    }, []);

    const signout = useCallback(() => {
        setIsSignedIn(false);
        // setUserPending(false);
    }, []);

    useEffect(() => {
        // if (isSignedIn) {
        const request = async () => {
            setIsLoading(true);
            // setUserPending(true);
            try {
                const response = await fetch(
                    "http://localhost:5000/api/users/5ec6ead61ec313a99959ac79"
                );
                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                // console.log(responseData.user);
                setCurrentUser(responseData.user);
                setIsLoading(false);
                // setUserPending(false);
            } catch {
                setIsLoading(false);
                // setUserPending(false);
                // setError(error.message);
            }
        };

        request();
        // }
    }, []);

    // {
    //     id: 1,
    //     first_name: "User",
    //     last_name: "Test",
    //     email: "testuser@yemoja.com",
    //     estimated_period_length: 5,
    //     estimated_cycle_length: 30,
    // };

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
                                    <Cycle {...props} user={currentUser} />
                                )}
                            />
                            <RouteWithTitle
                                title={"Calendar"}
                                exact={true}
                                path="/calendar"
                                component={props => <Calendar {...props} />}
                            />
                            <RouteWithTitle
                                title={"Profile"}
                                exact={true}
                                path="/profile"
                                component={props => (
                                    <Profile {...props} user={currentUser} />
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
