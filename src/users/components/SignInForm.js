import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/forms/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
// import API from "../adapters/API";

const SignInForm = () => {
    const handleEmailInput = useCallback((id, value, isValid) => {}, []);

    const handlePasswordInput = useCallback((id, value, isValid) => {}, []);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("I've been submitted");
    };

    return (
        <div>
            <form>
                <Input
                    element="input"
                    type="text"
                    id="emailInput"
                    name="email"
                    placeholder="E-Mail Address"
                    handleInput={handleEmailInput}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Email cannot be blank"
                />
                <Input
                    element="input"
                    type="password"
                    id="passwordInput"
                    name="password"
                    placeholder="Password"
                    handleInput={handlePasswordInput}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Password cannot be blank"
                />
                <br />
                <button
                    className="primary-btn"
                    // disabled={isDisabled}
                    onClick={handleSubmit}
                >
                    <p className="dark-text small-text">Sign In</p>
                </button>
            </form>
        </div>
    );
};

export default SignInForm;

// class SignInForm extends React.Component {
//     state = {
//         email: "",
//         password: "",
//     };

//     handleChange = event =>
//         this.setState({ [event.target.name]: event.target.value });

//     validateForm = (email, password) => {
//         const emailValidation = email.length === 0;
//         const passwordValidation = password.length === 0;

//         return {
//             email: emailValidation,
//             password: passwordValidation,
//         };
//     };

//     canSubmit() {
//         const { email, password } = this.state;
//         const errors = this.validateForm(email, password);

//         return !Object.keys(errors).some(x => errors[x]);
//     }

//     handleSubmit = event => {
//         event.preventDefault();

//         if (!this.canSubmit()) {
//             return;
//         }

//         // API.signIn(this.state.email, this.state.password)
//         //     .then(data => {
//         //         if (data.error) throw Error(data.error);
//         //         this.props.signIn(data);
//         //         this.props.history.push("/cycle");
//         //     })
//         //     .catch(error => alert(error));
//     };

//     render() {
//         const { email, password } = this.state;
//         const { handleChange, handleSubmit } = this;

//         const errors = this.validateForm(email, password);
//         const isDisabled = !this.canSubmit();

//         return (
//             <
//         );
//     }
// }
