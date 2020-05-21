import React, { useContext } from "react";

import Input from "../../shared/components/forms/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import useForm from "../../shared/hooks/form-hook";
import AuthContext from "../../shared/context/auth-context";
// import API from "../adapters/API";

const SignInForm = () => {
    const auth = useContext(AuthContext);
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
            const response = await fetch(
                "http://localhost:5000/api/users/signin",
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
            console.log(responseData);
        } catch (err) {
            alert(err);
        }

        auth.signIn();
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
                disabled={!formState.isFormValid}
                onClick={handleSignIn}
            >
                <p className="dark-text small-text">Sign In</p>
            </button>
        </form>
    );
};

export default SignInForm;
