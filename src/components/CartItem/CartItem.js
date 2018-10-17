import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";

export default class CartItem extends Component {
  handleOnClick = event => {
    console.log(this.props.product);
  };

  render() {
    const { product } = this.props;
    return (
      <li className="products-list-item">
        {/*<Link to={`/product/${product._id}`}>*/}
        <figure className="card">
          <button onClick={this.handleOnClick}>X</button>
          <img
            className="card-img-top"
            src={product.imageLink}
            alt={product.item}
          />
          <div className="card-body">
            <figcaption className="card-title">{product.item}</figcaption>
            <p className="card-subtitle">{product.price}</p>
          </div>
        </figure>
        {/*</Link>*/}
      </li>
    );
  }
}
