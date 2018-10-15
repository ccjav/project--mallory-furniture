import React, { Component } from "react";

import { getProducts } from "../../lib/api";
import ProductsList from "../../components/ProductsList";

class Category extends Component {
  state = {
    loading: true,
    error: null,
    searchParams: {
      category: this.getCategory()
    }
  };

  getCategory() {
    return this.props.match.params.categoryType;
  }

  componentDidMount() {
    this.loadProducts(this.state.searchParams);
  }

  loadProducts = searchParams => {
    this.setState({
      loading: true,
      error: null
    });

    getProducts(searchParams)
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

  handleClick = event => {
    this.setState(
      {
        searchParams: { ...this.state.searchParams, onSale: true }
      },
      () => {
        this.loadProducts(this.state.searchParams);
      }
    );
  };

  render() {
    const { loading, error, data } = this.state;
    const category = this.getCategory();

    if (loading) {
      return "loading";
    }

    const products = data;
    const heroBackground = require(`../../images/category-${category}.png`);

    return (
      <div className="Category">
        <div
          className="jumbotron"
          style={{
            backgroundImage: `url(${heroBackground})`
          }}
        />
        <h2>{category}</h2>
        <h3>All {category} products</h3>
        <button>All items</button>
        <button onClick={this.handleClick}>On sale</button>
        <ProductsList products={products} />
      </div>
    );
  }
}

export default Category;
