import React from "react";
import Auth from "./Auth";

import SignUpForm from "../components/SignUpForm.js";

const SignUp = ({ signUp, history }) => (
    <div className="starter-page">
        <Auth
            pageTitle="Create your account"
            form={<SignUpForm signUp={signUp} history={history} />}
            altPrompt="Already have an account? "
            altInstruction="Sign In"
            altSlug="/signin"
        />
    </div>
);

export default SignUp;
