import React, { Component } from "react";

import { getProducts } from "../../lib/api";
import ProductsList from "../../components/ProductsList";

class AllProducts extends Component {
  state = {
    loading: true,
    error: null,
    searchParams: {}
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    this.setState({
      loading: true,
      error: null
    });

    getProducts(this.state.searchParams)
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  };

  handleOnSaleClick = event => {
    this.setState(
      {
        searchParams: { ...this.state.searchParams, onSale: true }
      },
      () => {
        this.loadProducts();
      }
    );
  };

  handleAllItemsClick = event => {
    const { onSale, ...withoutOnSaleParam } = this.state.searchParams;

    this.setState(
      {
        searchParams: withoutOnSaleParam
      },
      () => {
        this.loadProducts();
      }
    );
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return "loading";
    }

    const products = data;
    return (
      <div className="AllProducts">
        <button onClick={this.handleAllItemsClick}>All items</button>
        <button onClick={this.handleOnSaleClick}>On sale</button>
        <ProductsList products={products} />
      </div>
    );
  }
}

export default AllProducts;
