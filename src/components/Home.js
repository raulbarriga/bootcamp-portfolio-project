import React from "react";
import SearchBox from "./SearchBox";

const Home = ({
  setSearchText,
  searchText,
  fetchProperties,
  fetchAutoCompleteSearch,
  autocompResults,
  autocompleteLimit,
  showAutoCMenu,
  setShowAutoCMenu,
  radioClicked,
  setRadioClicked,
}) => {
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
            showAutoCMenu={showAutoCMenu}
            setShowAutoCMenu={setShowAutoCMenu}
            setSearchText={setSearchText}
            searchText={searchText}
            fetchProperties={fetchProperties}
            fetchAutoCompleteSearch={fetchAutoCompleteSearch}
            autocompResults={autocompResults}
            autocompleteLimit={autocompleteLimit}
            radioClicked={radioClicked}
            setRadioClicked={setRadioClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
