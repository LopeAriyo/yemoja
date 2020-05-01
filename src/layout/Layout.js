import React, { Component } from "react";

import SideDrawer from "./components/navigation/SideDrawer";
import Footer from "./components/navigation/Footer";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <SideDrawer />
                <main>{this.props.children}</main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;
