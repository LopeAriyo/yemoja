import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/forms/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
// import API from "../adapters/API";

const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true;
            for (const inputID in state.inputs) {
                if (inputID === action.inputID) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputID].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputID]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };
        default:
            return state;
    }
};

const SignInForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
        },
        isValid: false,
    });
    const handleInput = useCallback((id, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputID: id,
        });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("I've been submitted");
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
                onClick={handleSubmit}
            >
                <p className="dark-text small-text">Sign In</p>
            </button>
        </form>
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
