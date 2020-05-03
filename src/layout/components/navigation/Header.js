import React from "react";
// import Navbar from "./BottomNavbar";

const Header = props => (
    <header className="header">
        {/* <Navbar handleSideNavBarOpen={props.handleSideNavBarClick} /> */}
        {/* <SideNavbar
            sideNavBarVisible={props.sideNavBarVisible}
            handleSideNavBarClose={props.handleSideNavBarClick}
        /> */}
        <div className="menu-btn">
            <span />
            <span />
            <span />
        </div>
        <div className="spacer"></div>
        <h3 className="page-title">Page Title</h3>
        <div className="spacer"></div>
        <div className="info-btn">?</div>
    </header>
);

export default Header;
