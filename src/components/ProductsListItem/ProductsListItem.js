import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductsListItem.css";

export default class ProductsListItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <li className="products-list-item">
        <Link to={`/product/${product._id}`}>
          <figure className="card">
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
        </Link>
      </li>
    );
  }
}
