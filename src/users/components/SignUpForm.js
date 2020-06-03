import React, { useContext, useState } from "react";

import Input from "../../shared/components/forms/Input";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_MATCH,
} from "../../shared/utils/validator";
import useForm from "../../shared/hooks/form-hook";
import AuthContext from "../../shared/context/auth-context";

const SignUpForm = () => {
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

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

    const handleSignUp = async event => {
        event.preventDefault();

        try {
            setIsLoading(true);
            const response = await fetch(
                "http://localhost:5000/api/users/signup",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        first_name: formState.inputs.firstName.value,
                        last_name: formState.inputs.lastName.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                }
            );

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setIsLoading(false);
            auth.signIn();
        } catch (err) {
            setIsLoading(false);
            setError(
                err.message || "Something went wrong please contact admin"
            );
        }
    };

    return (
        <div>
            {isLoading && <p>Loading.. </p>}
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
                {error && <p> {error}</p>}
                <br />
                <button
                    className="primary-btn"
                    disabled={!formState.isFormValid || error}
                    onClick={handleSignUp}
                >
                    <p className="light-text">Sign Up</p>
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
