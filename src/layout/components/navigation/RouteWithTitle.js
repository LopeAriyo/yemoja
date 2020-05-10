import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";

class RouteWithTitle extends Component {
    setPageTitle() {
        return (document.querySelector(
            ".page-title"
        ).innerText = this.props.title);
    }

    componentDidUpdate() {
        this.setPageTitle();
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                <Route {...this.props} />
            </React.Fragment>
        );
    }
}

// const RouteWithTitle = ({ title, ...props }) => (

// );

export default RouteWithTitle;
