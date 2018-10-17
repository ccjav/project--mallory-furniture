import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "../NavBar";
import Footer from "../Footer";
import Cart from "../Cart";

export default class Layout extends Component {
  handleDeleteCartItem = product => {
    console.log("desde layout");
    console.log(product);
    this.props.deleteCartItem(product);
    // this.setState({
    //   showCart: !this.state.showCart
    // });
  };

  render() {
    return (
      <>
        <NavBar showCart={this.props.showCart} />
        {this.props.isCartVisible ? (
          <Cart
            cart={this.props.cart}
            deleteCartItem={this.handleDeleteCartItem}
          />
        ) : null}

        {this.props.children}
        <Footer />
      </>
    );
  }
}
