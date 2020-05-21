import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";

import AuthContext from "../../context/auth-context";

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return (
        <nav className="main-navigation">
            <ul className="nav-links">
                {/* <li className="nav-link">
                    <NavLink to="/calendar">Calendar</NavLink>
                </li> */}
                {/* <li className="nav-link">
                        <Link to="/#contact">Journal</Link>
                    </li> */}
                {/* <li className="nav-link">
                    <NavLink to="/" exact>
                        Cycle
                    </NavLink>
                </li> */}
                {/* <li className="nav-link">
                        <Link to="/#blog">Insights</Link>
                    </li> */}
                {/* <li className="nav-link">
                    <NavLink to="/profile">Profile </NavLink>
                </li> */}
                <li className="nav-link" onClick={auth.signOut}>
                    Sign Out
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
