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
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={props => <Home {...props} />}
                    />
                    <Route
                        exact
                        path="/calendar"
                        component={props => <Calendar {...props} />}
                    />
                    <Route
                        exact
                        path="/profile"
                        component={props => <Profile {...props} />}
                    />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
