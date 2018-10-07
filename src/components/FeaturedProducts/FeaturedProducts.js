import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class FeaturedProducts extends Component {
  state = {
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts = () => {
    console.log("load featured");
  };

  render() {
    return (
      <div>
        <h2>Featured Products</h2>
        <h3>Checkout some of our favorite listings</h3>
      </div>
    );
  }
}
