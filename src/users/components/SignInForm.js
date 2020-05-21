import React from "react";

import Input from "../../shared/components/forms/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import useForm from "../../shared/hooks/form-hook";
// import API from "../adapters/API";

const SignInForm = () => {
    const [formState, handleInput] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const handleSignIn = event => {
        event.preventDefault();
        console.log("I've signed in ");
        console.log(formState.inputs);

        // API.signIn(this.state.email, this.state.password)
        //     .then(data => {
        //         if (data.error) throw Error(data.error);
        //         this.props.signIn(data);
        //         this.props.history.push("/cycle");
        //     })
        //     .catch(error => alert(error));
    };

    return (
        <form>
            <Input
                element="input"
                type="text"
                id="email"
                name="email"
                placeholder="E-Mail Address"
                handleInput={handleInput}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Email cannot be blank"
            />
            <Input
                element="input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                handleInput={handleInput}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Password cannot be blank"
            />
            <br />
            <button
                className="primary-btn"
                disabled={!formState.isValid}
                onClick={handleSignIn}
            >
                <p className="dark-text small-text">Sign In</p>
            </button>
        </form>
    );
};

export default SignInForm;
