import React from "react";
import SignPage from "./SignPage";

import SignInForm from "../components/SignInForm";

//TODO - STRETCH
//+ Add sign in with socials functionality

const SignIn = ({ signIn, history }) => (
    <div className="starter-page">
        <SignPage
            pageTitle="Welcome back"
            form={<SignInForm signIn={signIn} history={history} />}
            altPrompt="Don't have an account? "
            altInstruction="Sign Up"
            altSlug="/signup"
        />
    </div>
);

export default SignIn;
