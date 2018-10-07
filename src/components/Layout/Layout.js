import React, { Component } from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
