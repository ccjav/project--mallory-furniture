import React, { Component } from "react";

import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <FeaturedProducts />
      </div>
    );
  }
}

export default Home;
