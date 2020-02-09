import React from "react";
import {Link} from "react-router-dom";
import logo from "../logo.svg";
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-center">
        <img src={logo} className="logo" alt="cocktail db logo" />
        <ul className="nav-links">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
