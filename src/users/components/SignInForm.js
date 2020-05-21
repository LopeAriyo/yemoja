import React from "react";

import Input from "../../shared/components/forms/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
// import API from "../adapters/API";

//TODO
//+ Add forgot password functionality

const SignInForm = () => {
    return (
        <div>
            <form>
                <Input
                    element="input"
                    type="text"
                    id="emailInput"
                    name="email"
                    placeholder="E-Mail Address"
                    // className={errors.email && "error "}
                    // value={email}
                    // onChange={handleChange}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Email cannot be blank"
                />
                <Input
                    element="input"
                    type="password"
                    id="passwordInput"
                    name="password"
                    placeholder="Password"
                    // className={errors.password && "error "}
                    // value={password}
                    // onChange={handleChange}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Password cannot be blank"
                />
                {/* <p> Forgot Password? </p> */}
                <br />
                <button
                    className="primary-btn"
                    // disabled={isDisabled}
                    // onClick={handleSubmit}
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
