import React from "react";
import { NavLink } from "react-router-dom";

const SideNavLinks = () => {
    return (
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
    );
};

export default SideNavLinks;
