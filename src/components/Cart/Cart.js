import React, { Component } from "react";

import "./Cart.css";
import CartItem from "../CartItem";

export default class Cart extends Component {
  render() {
    const cart = [...this.props.cart];
    return (
      <div className="sidenav">
        <h2>Your cart</h2>
        <ul className="ProductsList">
          {cart.map(product => (
            <li>
              <CartItem key={product._id} product={product} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
