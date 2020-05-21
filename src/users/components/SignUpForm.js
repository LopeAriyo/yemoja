import React from "react";

import Input from "../../shared/components/forms/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
// import API from "../adapters/API";

const SignUpForm = () => {
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
                        // className={
                        //     errors.firstName
                        //         ? "error small-input"
                        //         : "small-input"
                        // }
                        // value={firstName}
                        // onChange={handleChange}
                        validators={[VALIDATOR_REQUIRE()]}
                        errorTextClass="small-error-text"
                        errorText="Cannot be blank"
                    />
                    <Input
                        element="input"
                        type="text"
                        id="lastNameInput"
                        name="lastName"
                        placeholder="Enter Last Name"
                        className="small-input"
                        // value={lastName}
                        // onChange={handleChange}

                        // className={
                        //     errors.lastName
                        //         ? "error small-input"
                        //         : "small-input"
                        // }
                        validators={[VALIDATOR_REQUIRE()]}
                        errorTextClass="small-error-text"
                        errorText="Cannot be blank"
                    />
                </div>
                <Input
                    element="input"
                    type="text"
                    id="emailInput"
                    name="email"
                    placeholder="Enter E-Mail Address"
                    // value={email}
                    // onChange={handleChange}
                    // className={errors.email && "error "}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Email cannot be blank"
                />
                <Input
                    element="input"
                    type="password"
                    id="passwordInput"
                    name="password"
                    placeholder="Create Password"
                    // value={password}
                    // onChange={handleChange}
                    // className={errors.password && "error "}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Password cannot be blank"
                />
                <Input
                    element="input"
                    type="password"
                    id="passwordConfirmationInput"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    // value={passwordConfirmation}
                    // onChange={handleChange}
                    // className={errors.passwordConfirmation && "error "}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Password does not match"
                />
                <br />
                <button
                    className="primary-btn"
                    // disabled={isDisabled}
                    // onClick={handleSubmit}
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
