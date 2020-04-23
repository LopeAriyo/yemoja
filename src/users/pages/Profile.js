import React from "react";
// import { Link } from "react-router-dom";

class Profile extends React.Component {
    render() {
        const { first_name, last_name, email } = this.props.user;
        const { signOut } = this.props;

        return (
            <main>
                <h5 className="white-text"> Profile</h5>
                <h5 className="light-text">
                    {first_name} {last_name}
                </h5>
                <p className="white-text">{email}</p>
                <p className="light-text">Goal</p>
                <p className="white-text">Track Cycle</p>
                <button className="light-btn normal-btn">
                    <p className="normal-text dark-text"> Edit</p>
                </button>
                <button onClick={signOut} className="dark-btn normal-btn">
                    <p className="normal-text light-text"> Sign Out</p>
                </button>
            </main>
        );
    }
}

export default Profile;
