import React, { Component, Fragment } from "react";

import TopDrawer from "./components/navigation/TopDrawer";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import NavLinks from "./components/navigation/NavLinks";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <TopDrawer>
                    <NavLinks />
                </TopDrawer>

                {this.props.children}
                <Footer>
                    <NavLinks />
                </Footer>
            </Fragment>
        );
    }
}

export default Layout;
