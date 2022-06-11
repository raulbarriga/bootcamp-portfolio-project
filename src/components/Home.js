import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Home = ({ setSearchText, searchText, setCurrentPage, fetchForSale }) => {
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
          <SearchBox
            setSearchText={setSearchText}
            searchText={searchText}
            setCurrentPage={setCurrentPage}
            fetchForSale={fetchForSale}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
