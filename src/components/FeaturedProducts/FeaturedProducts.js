import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class FeaturedProducts extends Component {
  render() {
    const { products } = this.props;

    const featuredProducts = products.filter(
      product => product.featured === true
    );

    return (
      <div>
        <h2>Featured Products</h2>
        <h3>Checkout some of our favorite listings</h3>
        <ul className="FeaturedProducts">
          {featuredProducts.map(product => (
            <li>{product.item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
