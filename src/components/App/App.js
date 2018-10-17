import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./../Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Terms from "../../pages/Terms";
import AllProducts from "../../pages/AllProducts";
import Product from "../../pages/Product";
import Category from "../../pages/Category";

class App extends Component {
  state = {
    cart: new Set(),
    showCart: false
  };

  handleAddProductToCart = product => {
    this.setState(({ cart }) => ({
      cart: new Set(cart.add(product))
    }));
  };

  handleShowCart = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  };

  render() {
    return (
      <div className="App">
        <Layout
          cart={this.state.cart}
          showCart={this.handleShowCart}
          isCartVisible={this.state.showCart}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/all-products" component={AllProducts} />
            <Route
              exact
              path="/product/:productId"
              render={props => (
                <Product
                  {...props}
                  addProductToCart={this.handleAddProductToCart}
                />
              )}
            />
            <Route exact path="/category/:categoryType" component={Category} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
