import React from "react";
import { Link } from "react-router-dom";
import PlayStore from '../assets/images/google-play-badge.png';
import AppStore from '../assets/images/app-store-logo.png';


function Footer() {
  return (
    <footer className="bg-color my-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <img
              className="phones-img"
              src="http://uilove.in/realestate/listo/preview/img/demo/mobile-app-hero.png"
              alt=""
            />
          </div>
          <div className="col-sm-4 store-icons">
            <h3>Download the Real Estate App</h3>
            <span>
              <a href="#">
                <img
                  className="play-store"
                  src={PlayStore}
                  alt=""
                />
              </a>
            </span>
            <span>
              <a href="#">
                <img className="app-store" src={AppStore} alt="" />
              </a>
            </span>
          </div>
          <div className="col-sm-4 footer-links">
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/listings">Listings</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              {/* <li>
                <Link to="/login">Log In</Link>
              </li> */}
              {/* <li id="nav-item-btn">
                <button
                  className="btn btn-primary text-white"
                  onClick={window.location.href={'/register'}}
                >
                  <a href="/register">Register</a>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
