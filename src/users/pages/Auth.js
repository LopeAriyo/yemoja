import React from "react";
import { Link } from "react-router-dom/";

const Auth = props => {
    return (
        <React.Fragment>
            <header className="sign-header">
                <div className="left-arrow">
                    {" "}
                    <Link to="/">{"<-"}</Link>{" "}
                </div>
                <Link to={props.altSlug}>{props.altInstruction}</Link>
            </header>
            <main className="sign-page">
                <h5 className="page-title">{props.pageTitle}</h5>
                {props.form}
                <p className="alt-links">
                    {props.altPrompt}
                    <Link to={props.altSlug}>{props.altInstruction}</Link>{" "}
                </p>
            </main>
        </React.Fragment>
    );
};

export default Auth;
