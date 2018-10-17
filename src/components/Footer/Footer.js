import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Company</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/terms">Terms + conditions</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Catogories</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/category/seating">Seating</Link>
                </li>
                <li>
                  <Link to="/category/tables">Tables</Link>
                </li>
                <li>
                  <Link to="/category/miscellaneous">Misc</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2018</div>
      </footer>
    );
  }
}
