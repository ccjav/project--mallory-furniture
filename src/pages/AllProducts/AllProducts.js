import React, { Component } from "react";

import { getProducts } from "../../lib/api";
import ProductsList from "../../components/ProductsList";

class AllProducts extends Component {
  state = {
    loading: true,
    error: null,
    selectedMaxPrice: 10000,
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
    const { onSale, condition, ...withoutParams } = this.state.searchParams;

    this.setState(
      {
        searchParams: withoutParams,
        selectedMaxPrice: 10000
      },
      () => {
        this.loadProducts();
      }
    );
  };

  handleQualitySelect = event => {
    const chosenCondition = event.target.value;
    let newSearchParams;

    if (chosenCondition === "") {
      let { condition, ...newSearchParams } = this.state.searchParams;
    } else {
      newSearchParams = {
        ...this.state.searchParams,
        condition: chosenCondition
      };
    }

    this.setState(
      {
        searchParams: { ...newSearchParams }
      },
      () => {
        this.loadProducts();
      }
    );
  };

  handleSliderChange = event => {
    this.setState({ selectedMaxPrice: event.target.value });
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return "loading";
    }

    const condition = !!this.state.searchParams.condition
      ? this.state.searchParams.condition
      : "";

    const products = data.filter(
      product => product.price <= this.state.selectedMaxPrice
    );

    return (
      <div className="AllProducts">
        <button onClick={this.handleAllItemsClick}>All items</button>
        <button onClick={this.handleOnSaleClick}>On sale</button>
        <span>Quality</span>
        <select onChange={this.handleQualitySelect} value={condition}>
          <option value="">Any</option>
          <option value="average">Average</option>
          <option value="good">Good</option>
          <option value="excellent">Excellent</option>
        </select>
        <span>Max price: ${this.state.selectedMaxPrice.toFixed(2)}</span>
        <input
          id="typeinp"
          type="range"
          min="0"
          max="10000"
          value={this.state.selectedMaxPrice}
          onChange={this.handleSliderChange}
          step="20"
        />

        <p>{products.length} items showing</p>
        <ProductsList products={products} />
      </div>
    );
  }
}

export default AllProducts;
