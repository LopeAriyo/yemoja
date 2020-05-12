import React from "react";
import { Link } from "react-router-dom/";
class Welcome extends React.Component {
    render() {
        return (
            <main className="starter-page">
                <div className="content">
                    <h1>y.</h1>
                    <h2> yemoja. </h2>
                    <p>Your new favourite period tracker</p>
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
            </main>
        );
    }
}

export default Welcome;
