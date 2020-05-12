import React from "react";
import SignPage from "./SignPage";

import SignUpForm from "../components/SignUpForm.js";

const SignUp = ({ signUp, history }) => (
    <div className="starter-page">
        <SignPage
            pageTitle="Create your account"
            form={<SignUpForm signUp={signUp} history={history} />}
            altPrompt="Already have an account? "
            altInstruction="Sign In"
            altSlug="/signin"
        />
    </div>
);

export default SignUp;
