import React, { Component } from "react";
import "./ProductsList.css";

import ProductsListItem from "../ProductsListItem";

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <ul className="ProductsList">
        {products.map(product => (
          <ProductsListItem key={product._id} product={product} />
        ))}
      </ul>
    );
  }
}
