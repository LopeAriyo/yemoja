import React from "react";
import { Link } from "react-router-dom/";
class Welcome extends React.Component {
    render() {
        return (
            <main>
                <div className="Welcome">
                    <h2> athena. </h2>
                    <p>Your new favourite period tracker</p>
                    {/* <Link to="/signup">
                        <button className="dark-btn normal-btn">
                            {" "}
                            <p className="white-text small-text">Sign Up</p>
                        </button>
                    </Link> */}
                    <br />
                    <Link to="/signin">
                        <button className="white-btn normal-btn">
                            <p className="dark-text small-text">Sign In</p>
                        </button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default Welcome;
