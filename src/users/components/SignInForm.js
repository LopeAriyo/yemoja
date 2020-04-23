import React from "react";
import API from "../adapters/API";

//TODO
//+ Add forgot password functionality
class SignInForm extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    validateForm = (email, password) => {
        const emailValidation = email.length === 0;
        const passwordValidation = password.length === 0;

        return {
            email: emailValidation,
            password: passwordValidation
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

        API.signIn(this.state.email, this.state.password)
            .then(data => {
                if (data.error) throw Error(data.error);
                this.props.signIn(data);
                this.props.history.push("/cycle");
            })
            .catch(error => alert(error));
    };

    render() {
        const { email, password } = this.state;
        const { handleChange, handleSubmit } = this;

        const errors = this.validateForm(email, password);
        const isDisabled = !this.canSubmit();

        return (
            <div>
                <form>
                    <input
                        id="emailInput"
                        name="email"
                        className={
                            errors.email
                                ? "error full-length-input"
                                : "full-length-input"
                        }
                        placeholder="E-Mail Address"
                        type="text"
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
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                    {/* <p> Forgot Password? </p> */}
                    <br />
                    <button
                        className="light-btn normal-btn"
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
