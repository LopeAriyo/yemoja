import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Home from "./home/pages/Home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={props => <Home {...props} />}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;
