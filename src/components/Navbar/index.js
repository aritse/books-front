import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://www.google.com/googlebooks/about/">
          Navbar
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Search <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved" className="nav-link">
              Saved
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
