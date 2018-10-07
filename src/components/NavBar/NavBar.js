import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/terms">Terms + Conditions</Link>
            </li>
            <li>
              <Link to="/all-products">All</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
