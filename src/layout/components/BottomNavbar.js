import React from "react";
import { NavLink } from "react-router-dom";

const navbar = props => {
    return (
        <nav className="bottom-navigation">
            <div>
                <ul className="nav-links">
                    <li className="nav-link">
                        <NavLink to="/calendar">Calendar</NavLink>
                    </li>
                    {/* <li className="nav-link">
                        <Link to="/#contact">Journal</Link>
                    </li> */}
                    <li className="nav-link">
                        <NavLink to="/">Home </NavLink>
                    </li>
                    {/* <li className="nav-link">
                        <Link to="/#blog">Insights</Link>
                    </li> */}
                    <li className="nav-link">
                        <NavLink to="/profile">Profile </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default navbar;
