import React from "react";

import Input from "../../shared/components/forms/Input";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_MATCH,
} from "../../shared/utils/validator";
import useForm from "../../shared/hooks/form-hook";

const SignUpForm = () => {
    const [formState, handleInput] = useForm(
        {
            firstName: {
                value: "",
                isValid: false,
            },
            lastName: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
            passwordConfirmation: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    const handleSignUp = event => {
        event.preventDefault();
        console.log("I've signed up");
        console.log(formState.inputs);
        // API.signUp(newUser)
        //         //     .then(data => {
        //         //         if (data.error) throw Error(data.error);
        //         //     })
        //         //     .catch(error => alert(error));
        alert("Thanks for signing up!");
        //either reset form or automatically sign in
    };

    return (
        <div>
            <form>
                <div className="name-fields">
                    <Input
                        element="input"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter First Name"
                        className="small-input"
                        handleInput={handleInput}
                        validators={[VALIDATOR_MINLENGTH(2)]}
                        errorTextClass="small-error-text"
                        errorText="First name minimum 2 characters"
                    />
                    <Input
                        element="input"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        className="small-input"
                        handleInput={handleInput}
                        validators={[VALIDATOR_MINLENGTH(2)]}
                        errorTextClass="small-error-text"
                        errorText="Last name minimum 2 characters"
                    />
                </div>
                <Input
                    element="input"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter E-Mail Address"
                    handleInput={handleInput}
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Enter valid email"
                />
                <Input
                    element="input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create Password"
                    handleInput={handleInput}
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorText="Password minimum 6 characters"
                />
                <Input
                    element="input"
                    type="password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    handleInput={handleInput}
                    validators={[
                        VALIDATOR_MATCH(formState.inputs.password.value),
                    ]}
                    errorText="Password does not match"
                />
                <br />
                <button
                    className="primary-btn"
                    disabled={!formState.isFormValid}
                    onClick={handleSignUp}
                >
                    <p className="light-text">Sign Up</p>
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
