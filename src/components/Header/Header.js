import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-custom navbar-dark"
          role="navigation"
        >
          <div id="container-fluid-nav" className="container-fluid">
            <NavLink to="/home" className="navbar-brand">
              LOGO
            </NavLink>

            {/* Collapse Button Toggler */}
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#toggle-btn"
              aria-expanded="false"
              aria-controls="toggle-btn"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="toggle-btn" className="collapse navbar-collapse">
              <ul id="nav-css" className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/listings">
                    Listings
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/aboutus">
                    About Us
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/login'>Log In</NavLink>
                            </li> */}
                {/* <li id="nav-item-btn" className="nav-item">
                                <button className="btn btn-primary text-white" onclick="window.location.href='register.html'"><a href="register.html">Register</a></button>
                            </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
