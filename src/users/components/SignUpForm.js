import React from "react";

import API from "../adapters/API";

class SignUpForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    validate = (firstName, lastName, email, password, passwordConfirmation) => {
        // false means no errors
        // true means a field is invalid

        const firstNameValidation =
            firstName.length === 0 || //firstName must be present
            firstName.length < 2 ||
            firstName.length > 20; //firstName must be between 2 and 20 characters

        const lastNameValidation =
            lastName.length === 0 || //lastName must be present
            lastName.length < 2 ||
            lastName.length > 20; //lastName must be between 2 and 20 characters

        const emailValidation = email.length === 0; //email must be present
        //email must be unique //not validated here!
        //STRETCH - email must be a correct email format
        //const emailFormat =

        const passwordValidation =
            password.length === 0 || //password must be present
            password.length < 8 ||
            password.length > 20; //password must be between 8 and 20 characters

        //STRETCH - show the user their password strength
        //const passwordFormat =

        const passwordConfirmationValidation =
            passwordConfirmation.length === 0 || //passwordConfirmation must be present
            passwordConfirmation !== password; //passwordConfirmation must match password

        return {
            firstName: firstNameValidation,
            lastName: lastNameValidation,
            email: emailValidation,
            password: passwordValidation,
            passwordConfirmation: passwordConfirmationValidation
        };
    };

    canSubmit() {
        const {
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation
        } = this.state;

        const errors = this.validate(
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation
        );

        return !Object.keys(errors).some(x => errors[x]);
    }

    handleSubmit = event => {
        if (!this.canSubmit()) {
            event.preventDefault();
            return;
        }

        const newUser = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation
        };

        API.signUp(newUser)
            .then(data => {
                if (data.error) throw Error(data.error);
            })
            .catch(error => alert(error));
        alert(`Signed Up`);
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation
        } = this.state;

        const { handleChange, handleSubmit } = this;

        const errors = this.validate(
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation
        );
        const isDisabled = !this.canSubmit();

        return (
            <div>
                <form>
                    <input
                        id="firstNameInput"
                        name="firstName"
                        className={
                            errors.firstName
                                ? "error half-length-input"
                                : "half-length-input"
                        }
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={handleChange}
                    />
                    <input
                        id="lastNameInput"
                        name="lastName"
                        className={
                            errors.lastName
                                ? "error half-length-input"
                                : "half-length-input"
                        }
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        id="emailInput"
                        name="email"
                        className={
                            errors.email
                                ? "error full-length-input"
                                : "full-length-input"
                        }
                        placeholder="Enter E-Mail Address"
                        value={email}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        id="passwordInput"
                        name="password"
                        className={
                            errors.password
                                ? "error full-length-input"
                                : "full-length-input"
                        }
                        placeholder="Create Password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        id="passwordConfirmationInput"
                        name="passwordConfirmation"
                        className={
                            errors.passwordConfirmation
                                ? "error full-length-input"
                                : "full-length-input"
                        }
                        placeholder="Confirm Password"
                        type="password"
                        value={passwordConfirmation}
                        onChange={handleChange}
                    />
                    <br />
                    <button
                        className="dark-btn normal-btn"
                        disabled={isDisabled}
                        onClick={handleSubmit}
                    >
                        <p className="light-text">Sign Up</p>
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
