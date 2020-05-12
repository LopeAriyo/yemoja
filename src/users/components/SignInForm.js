import React from "react";

import Input from "../../layout/components/forms/Input";
// import API from "../adapters/API";

//TODO
//+ Add forgot password functionality
class SignInForm extends React.Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    validateForm = (email, password) => {
        const emailValidation = email.length === 0;
        const passwordValidation = password.length === 0;

        return {
            email: emailValidation,
            password: passwordValidation,
        };
    };

    canSubmit() {
        const { email, password } = this.state;
        const errors = this.validateForm(email, password);

        return !Object.keys(errors).some(x => errors[x]);
    }

    handleSubmit = event => {
        event.preventDefault();

        if (!this.canSubmit()) {
            return;
        }

        // API.signIn(this.state.email, this.state.password)
        //     .then(data => {
        //         if (data.error) throw Error(data.error);
        //         this.props.signIn(data);
        //         this.props.history.push("/cycle");
        //     })
        //     .catch(error => alert(error));
    };

    render() {
        const { email, password } = this.state;
        const { handleChange, handleSubmit } = this;

        const errors = this.validateForm(email, password);
        const isDisabled = !this.canSubmit();

        return (
            <div>
                <form>
                    <Input
                        element="input"
                        type="text"
                        id="emailInput"
                        name="email"
                        placeholder="E-Mail Address"
                        value={email}
                        onChange={handleChange}
                        className={errors.email && "error "}
                    />
                    <Input
                        element="input"
                        type="password"
                        id="passwordInput"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        className={errors.password && "error "}
                    />
                    {/* <p> Forgot Password? </p> */}
                    <br />
                    <button
                        className="primary-btn"
                        disabled={isDisabled}
                        onClick={handleSubmit}
                    >
                        <p className="dark-text small-text">Sign In</p>
                    </button>
                </form>
            </div>
        );
    }
}

export default SignInForm;
