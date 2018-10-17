import React, { Component } from "react";

import "./Cart.css";
import CartItem from "../CartItem";

export default class Cart extends Component {
  handleDeleteCartItem = product => {
    this.props.deleteCartItem(product);
  };

  render() {
    const cart = [...this.props.cart];
    return (
      <div className="sidenav">
        <h2>Your cart</h2>
        <ul className="ProductsList">
          {cart.map(product => (
            <CartItem
              deleteCartItem={this.handleDeleteCartItem}
              key={product._id}
              product={product}
            />
          ))}
        </ul>
      </div>
    );
  }
}
