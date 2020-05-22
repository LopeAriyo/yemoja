import React from "react";
import Auth from "./Auth";

import SignInForm from "../components/SignInForm";

const SignIn = ({ signIn, history }) => (
    <div className="starter-page">
        <Auth
            pageTitle="Welcome back"
            form={<SignInForm signIn={signIn} history={history} />}
            altPrompt="Don't have an account? "
            altInstruction="Sign Up"
            altSlug="/signup"
        />
    </div>
);

export default SignIn;
