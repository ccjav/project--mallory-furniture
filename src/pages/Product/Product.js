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
        <div class="row">
          <div class="col-sm">
            <img src={product.imageLink} alt={product.item} />
          </div>
          <div class="col-sm">
            <h1>{product.item}</h1>
            <h2>${product.price.toFixed(2)}</h2>
            <p>Condition: {product.condition}</p>
            <p>
              Measurements: Length: {product.length}, height: {product.height}
            </p>
            <button onClick={this.handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
