import React from "react";

import MainNavigation from "./MainNavigation";
import NavLinks from "./NavLinks";

const sideNavbar = props => {
    return (
        <div className="side-drawer">
            <MainNavigation>
                <NavLinks />
            </MainNavigation>
        </div>
    );
};

export default sideNavbar;
