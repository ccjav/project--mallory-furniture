import React, { Component } from "react";

import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";
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

    return (
      <div className="Home">
        <Hero />
        <FeaturedProducts products={products} />
      </div>
    );
  }
}

export default Home;
