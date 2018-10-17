import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";

export default class CartItem extends Component {
  handleOnClick = event => {
    console.log(this.props.product);
    this.props.deleteCartItem(this.props.product);
  };

  render() {
    const { product } = this.props;
    return (
      <li className="cart-item">
        <figure className="card">
          <span className="close-button" onClick={this.handleOnClick}>
            X
          </span>
          <img
            className="card-img-top"
            src={product.imageLink}
            alt={product.item}
          />
          <div className="card-body">
            <figcaption className="card-title">{product.item}</figcaption>
            <p className="card-subtitle">${product.price.toFixed(2)}</p>
          </div>
        </figure>
      </li>
    );
  }
}
