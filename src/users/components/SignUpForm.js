import React, { useCallback } from "react";

import Input from "../../shared/components/forms/Input";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
} from "../../shared/utils/validator";

const SignUpForm = () => {
    const handleNameInput = useCallback((id, value, isValid) => {}, []);
    const handleEmailInput = useCallback((id, value, isValid) => {}, []);
    const handlePasswordInput = useCallback((id, value, isValid) => {}, []);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("I've been submitted");
    };

    return (
        <div>
            <form>
                <div className="name-fields">
                    <Input
                        element="input"
                        type="text"
                        id="firstNameInput"
                        name="firstName"
                        placeholder="Enter First Name"
                        className="small-input"
                        handleInput={handleNameInput}
                        validators={[VALIDATOR_MINLENGTH(2)]}
                        errorTextClass="small-error-text"
                        errorText="First name minimum 2 characters"
                    />
                    <Input
                        element="input"
                        type="text"
                        id="lastNameInput"
                        name="lastName"
                        placeholder="Enter Last Name"
                        className="small-input"
                        handleInput={handleNameInput}
                        validators={[VALIDATOR_MINLENGTH(2)]}
                        errorTextClass="small-error-text"
                        errorText="Last name minimum 2 characters"
                    />
                </div>
                <Input
                    element="input"
                    type="text"
                    id="emailInput"
                    name="email"
                    placeholder="Enter E-Mail Address"
                    handleInput={handleEmailInput}
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Enter valid email"
                />
                <Input
                    element="input"
                    type="password"
                    id="passwordInput"
                    name="password"
                    placeholder="Create Password"
                    handleInput={handlePasswordInput}
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorText="Password minimum 6 characters"
                />
                <Input
                    element="input"
                    type="password"
                    id="passwordConfirmationInput"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    handleInput={handlePasswordInput}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Password does not match"
                />
                <br />
                <button
                    className="primary-btn"
                    // disabled={isDisabled}
                    onClick={handleSubmit}
                >
                    <p className="light-text">Sign Up</p>
                </button>
            </form>
        </div>
    );
};

// class SignUpForm extends React.Component {
//     state = {
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         passwordConfirmation: "",
//     };

//     handleChange = event =>
//         this.setState({ [event.target.name]: event.target.value });

//     canSubmit() {
//         const {
//             firstName,
//             lastName,
//             email,
//             password,
//             passwordConfirmation,
//         } = this.state;

//         const errors = this.validate(
//             firstName,
//             lastName,
//             email,
//             password,
//             passwordConfirmation
//         );

//         return !Object.keys(errors).some(x => errors[x]);
//     }

//     handleSubmit = event => {
//         if (!this.canSubmit()) {
//             event.preventDefault();
//             return;
//         }

//         const newUser = {
//             first_name: this.state.firstName,
//             last_name: this.state.lastName,
//             email: this.state.email,
//             password: this.state.password,
//             passwordConfirmation: this.state.passwordConfirmation,
//         };

//         // API.signUp(newUser)
//         //     .then(data => {
//         //         if (data.error) throw Error(data.error);
//         //     })
//         //     .catch(error => alert(error));
//         alert(`Signed Up`);
//     };

//     render() {
//         const {
//             firstName,
//             lastName,
//             email,
//             password,
//             passwordConfirmation,
//         } = this.state;

//         const { handleChange, handleSubmit } = this;

//         const errors = this.validate(
//             firstName,
//             lastName,
//             email,
//             password,
//             passwordConfirmation
//         );
//         const isDisabled = !this.canSubmit();

//         return (

//         );
//     }
// }

export default SignUpForm;
