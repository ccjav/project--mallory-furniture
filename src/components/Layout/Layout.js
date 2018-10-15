import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "../NavBar";
import Footer from "../Footer";

export default class Layout extends Component {
  render() {
    return (
      <>
        <NavBar />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
