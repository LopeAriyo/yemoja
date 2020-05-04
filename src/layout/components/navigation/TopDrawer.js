import React from "react";
import ReactDOM from "react-dom";

const TopDrawer = props => {
    const component = <aside className="top-drawer">{props.children}</aside>;

    return ReactDOM.createPortal(
        component,
        document.getElementById("drawer-hook")
    );
};

export default TopDrawer;
