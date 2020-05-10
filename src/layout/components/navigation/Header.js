import React from "react";

const Header = props => {
    return (
        <header className="header">
            {props.isDrawerOpen ? (
                <button className="menu-btn" onClick={props.handleClose}>
                    <span />
                    <span />
                </button>
            ) : (
                <button className="menu-btn" onClick={props.handleOpen}>
                    <span />
                    <span />
                    <span />
                </button>
            )}
            <div className="spacer"></div>
            <h3 className="page-title">{document.title}</h3>
            <div className="spacer"></div>
            <div className="info-btn">?</div>
        </header>
    );
};

export default Header;
