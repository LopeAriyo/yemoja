import React, { Component } from "react";

// import Header from "./components/Header";
import Footer from "./components/Footer";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                <div className="wrapper">{this.props.children}</div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;
