import React from "react";
import { NavLink } from "react-router-dom";

const sideNavbar = props => {
    return (
        <nav className="side-navigation">
            <div>
                <ul className="side-nav-links">
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

export default sideNavbar;
