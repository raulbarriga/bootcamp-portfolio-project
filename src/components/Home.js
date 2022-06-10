import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      {/* Image Banner */}
      <div className="row">
        <div id="home-banner" className="col-12 px-0">
          <div className="overlay">
            <img
              className="home-img"
              src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/586970/getty-home-with-for-sale-sign.jpg&w=2000&op=resize"
              alt=""
            />
          </div>
          {/* Search form */}
          <div className="row">
            <div className="col-md-12 align-items-end">
              <div className="form-group">
                <div className="form-field search-box">
                  <form>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Enter City or Zip Code"
                      aria-label="Search"
                    />
                    <button type="submit" className="btn bg-white">
                      <FontAwesomeIcon className="fas" icon={faSearch} />
                    </button>
                  </form>
                  {/* onClick={} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
