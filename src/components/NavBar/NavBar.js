import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";

export default class NavBar extends Component {
  handleShowCart = () => {
    this.props.showCart();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <Logo />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/terms">
              Terms + Conditions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/all-products">
              All
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/seating">
              Seating
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/tables">
              Tables
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/desks">
              Desks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/storage">
              Storage
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/bedroom">
              Bedroom
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/miscellaneous">
              Misc
            </NavLink>
          </li>
          <li className="nav-item">
            <button onClick={this.handleShowCart}>Cart</button>
          </li>
        </ul>
      </nav>
    );
  }
}
