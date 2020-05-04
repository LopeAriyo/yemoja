import React, { Component, Fragment, useState } from "react";

import TopDrawer from "./components/navigation/TopDrawer";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import NavLinks from "./components/navigation/NavLinks";

const Layout = props => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <Fragment>
            <Header
                isDrawerOpen={isDrawerOpen}
                handleOpen={openDrawer}
                handleClose={closeDrawer}
            />
            {isDrawerOpen && (
                <TopDrawer>
                    <NavLinks />
                </TopDrawer>
            )}

            {props.children}
            <Footer>
                <NavLinks />
            </Footer>
        </Fragment>
    );
};

export default Layout;
