import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron--mallory">
        <h1>Mallory Furniture</h1>
        <h3>
          Your furniture is old.
          <br />
          Ours is older.
        </h3>
      </div>
    );
  }
}
