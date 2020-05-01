import React from "react";

import MainNavigation from "./MainNavigation";
import NavLinks from "./NavLinks";

const Footer = props => {
    return (
        <footer className="footer">
            <MainNavigation>
                <NavLinks />
            </MainNavigation>
        </footer>
    );
};

export default Footer;
