import React, { Component } from "react";
// import { Link } from "react-router-dom";

import ProductsListItem from "../ProductsListItem";

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <ul className="ProductsList">
          {products.map(product => (
            <ProductsListItem key={product._id} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}
