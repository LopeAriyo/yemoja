import React from "react";
import { Link } from "react-router-dom/";
class Welcome extends React.Component {
    render() {
        return (
            <main className="starter-page">
                <div className="welcome">
                    <div className="brand-intro">
                        <div className="logo">
                            <h1 className="short-form">y.</h1>
                            <h2 className="long-form"> yemoja. </h2>
                        </div>
                        <div className="tag-line">
                            <p>Your new favourite period tracker</p>
                        </div>
                    </div>
                    <div className="auth-options">
                        <Link to="/signup">
                            <button className="primary-btn">
                                <p>Sign Up</p>
                            </button>
                        </Link>
                        <br />
                        <Link to="/signin">
                            <button className="secondary-btn">
                                <p>Sign In</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
}

export default Welcome;
