import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "../NavBar";
import Footer from "../Footer";
import Cart from "../Cart";

export default class Layout extends Component {
	render() {
		return (
			<>
				<NavBar showCart={this.props.showCart} />
				{this.props.isCartVisible ? (
					<Cart cart={this.props.cart} />
				) : null}

				{this.props.children}
				<Footer />
			</>
		);
	}
}
