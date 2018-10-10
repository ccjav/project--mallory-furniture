import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <Logo />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms + Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/all-products">All</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
