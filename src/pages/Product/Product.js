import React, { Component } from "react";

import { getProduct } from "../../lib/api";

export default class Product extends Component {
  state = {
    product: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = () => {
    this.setState({
      loading: true,
      error: null
    });

    const { productId } = this.props.match.params;

    getProduct(productId)
      .then(product => {
        this.setState({
          product,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  };

  handleAddToCart = () => {
    this.props.addProductToCart(this.state.product);
  };

  render() {
    const { product, loading, error } = this.state;

    if (loading) {
      return "Loading";
    }

    if (error) {
      return `Error: ${error.message}`;
    }

    return (
      <div className="Product">
        <img src={product.imageLink} alt={product.item} />
        <div>
          <h1>{product.item}</h1>
        </div>
        <button onClick={this.handleAddToCart}>Add to Cart</button>
      </div>
    );
  }
}
