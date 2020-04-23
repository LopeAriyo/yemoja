import React from "react";
import { Link } from "react-router-dom/";

import SignUpForm from "../components/SignUpForm.js";

//TODO - STRETCH
//+ Add sign in with socials functionality

const SignUp = ({ signUp, history }) => (
    <div className="SignUp">
        <br />
        <h5>Create your account</h5>
        <br />
        <SignUpForm history={history} />
        {/* <p>-OR-</p>
                <SignUpWithSocials /> */}
        {/* By signing up you accept the Terms of Service and Our Privacy Policy*/}
        <p>
            {" "}
            Already have an account? <Link to="/signin">Sign In</Link>{" "}
        </p>
    </div>
);

export default SignUp;
