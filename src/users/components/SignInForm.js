import React, { useState, useContext } from "react";

import Input from "../../shared/components/forms/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import useForm from "../../shared/hooks/form-hook";
import AuthContext from "../../shared/context/auth-context";
// import API from "../adapters/API";

const SignInForm = () => {
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

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

    const handleSignIn = async event => {
        event.preventDefault();

        try {
            setIsLoading(true);
            const response = await fetch(
                "https://yemoja.herokuapp.com/api/auth/signin",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                }
            );

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.user);
            }

            //    console.log(responseData.user.id);

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
        <form>
            {isLoading && <p>Loading.. </p>}
            <Input
                element="input"
                type="text"
                id="email"
                name="email"
                placeholder="E-Mail Address"
                handleInput={handleInput}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your email"
            />
            <Input
                element="input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                handleInput={handleInput}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your password"
            />
            <br />
            {error && <p className="error-text"> {error}</p>}
            <br />
            <button
                className="primary-btn"
                disabled={!formState.isFormValid}
                onClick={handleSignIn}
            >
                <p className="dark-text small-text">Sign In</p>
            </button>
            <br />
        </form>
    );
};

export default SignInForm;
