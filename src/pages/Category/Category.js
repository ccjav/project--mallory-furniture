import React, { Component } from "react";
import { browserHistory } from "react-router";

import { getProducts } from "../../lib/api";
import ProductsList from "../../components/ProductsList";

class Category extends Component {
  state = {
    loading: true,
    error: null,
    searchParams: {
      category: this.props.match.params.categoryType
    }
  };

  getCategory() {
    return this.props.match.params.categoryType;
  }

  componentDidMount() {
    this.loadProducts();
    console.log("mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchParams.category !== this.props.match.params.categoryType
    ) {
      this.setState(
        {
          searchParams: {
            category: this.props.match.params.categoryType
          }
        },
        () => {
          this.loadProducts();
        }
      );
    }
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
    const { onSale, ...noOnSale } = this.state.searchParams;

    this.setState(
      {
        searchParams: noOnSale
      },
      () => {
        this.loadProducts();
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
        <button onClick={this.handleAllItemsClick}>All items</button>
        <button onClick={this.handleOnSaleClick}>On sale</button>
        <ProductsList products={products} />
      </div>
    );
  }
}

export default Category;
