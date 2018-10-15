import React, { Component } from "react";

import Hero from "../../components/Hero";
import ProductsList from "../../components/ProductsList";
import { getProducts } from "../../lib/api";

class Home extends Component {
  state = {
    loading: true,
    error: null,
    data: null
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    this.setState({
      loading: true,
      error: null
    });

    getProducts()
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

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return "loading";
    }

    const products = data;

    const featuredProducts = products.filter(
      product => product.featured === true
    );

    return (
      <>
        <Hero />
        <h2>Featured Products</h2>
        <h3>Checkout some of our favorite listings</h3>
        <ProductsList products={featuredProducts} />
        <div>
          <button type="button" class="btn btn-outline-danger">
            All products
          </button>
        </div>
        <h2>Browse by categories</h2>
        <h3>Explore by furniture type.</h3>
      </>
    );
  }
}

export default Home;
