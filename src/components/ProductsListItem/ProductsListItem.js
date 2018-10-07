import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductsListItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <li>
        <Link to={`/product/${product._id}`}>
          <figure>
            <img src={product.imageLink} alt={product.item} />
            <figcaption>{product.item}</figcaption>
            <p>{product.price}</p>
          </figure>
        </Link>
      </li>
    );
  }
}
