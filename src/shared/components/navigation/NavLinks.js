import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
    return (
        <nav className="main-navigation">
            <ul className="nav-links">
                {/* <li className="nav-link">
                    <NavLink to="/calendar">Calendar</NavLink>
                </li> */}
                {/* <li className="nav-link">
                        <Link to="/#contact">Journal</Link>
                    </li> */}
                <li className="nav-link">
                    <NavLink to="/" exact>
                        Cycle
                    </NavLink>
                </li>
                {/* <li className="nav-link">
                        <Link to="/#blog">Insights</Link>
                    </li> */}
                {/* <li className="nav-link">
                    <NavLink to="/profile">Profile </NavLink>
                </li> */}
            </ul>
        </nav>
    );
};

export default NavLinks;