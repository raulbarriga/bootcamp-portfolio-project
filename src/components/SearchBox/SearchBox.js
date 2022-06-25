import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// import AutoCompleteMenu from "./AutoCompleteMenu/AutoCompleteMenu";
import ForSaleRentDropdown from "./ForSaleRentDropdown/ForSaleRentDropdown";
import PropertiesDataContext from "../contexts/propertiesData";

const SearchBox = () => {
  const {
    searchText,
    setSearchText,
    fetchProperties,
    selectedSort,
    saleRentRadio,
    // showAutoCMenu,
    // autocompResults
    // fetchAutoCompleteSearch
  } = useContext(PropertiesDataContext);
  let location = useLocation();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const str = searchText.split(",");
    const city = str[0];
    const state = str[1].replace(/\s/g, "");
    fetchProperties(city, state, selectedSort, saleRentRadio);
  };

  const resetSearchText = () => {
    setSearchText("");
  };

  // from https://stackoverflow.com/a/62601621/13463953
  // it created an infinite loop when I passed a function to the dependency array, but useCallback resolved it where I implement fetchAutoCompleteSearch() in Main.js
  // useEffect(() => {
  //   const timeOutId = setTimeout(
  //     () => fetchAutoCompleteSearch(searchText),
  //     500
  //   );
  //   return () => clearTimeout(timeOutId);
  // }, [searchText, fetchAutoCompleteSearch]);

  return (
    <div id="searchBox" className="row">
      <div
        className={`col-md-12 align-items-end d-flex ${
          location.pathname === "/listings" ? "" : "justify-content-center"
        }`}
      >
        <div className="form-group">
          <div className="form-field search-box">
            <form onSubmit={onSubmitHandler}>
              <input
                type="search"
                name="search"
                value={searchText}
                className="form-control border-0"
                placeholder="Enter City or Zip Code"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div
                id="btn-group-parent"
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  {searchText !== "" && (
                    <button
                      type="reset"
                      onClick={resetSearchText}
                      className="btn bg-white position-relative"
                    >
                      <FontAwesomeIcon className="fas" icon={faTimes} />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn bg-white position-relative"
                  >
                    <FontAwesomeIcon className="fas" icon={faSearch} /> Search
                  </button>
                </div>
              </div>
            </form>
            {/* removed && searchText to maybe stop menu from showing when on home page clicking a autocomplete link and routing to the listings page */}
            {/* this works, just commented it out for now since it's fetching while I type in the searchBox */}
            {/* { showAutoCMenu && autocompResults && (
              <AutoCompleteMenu />
            )} */}
          </div>
        </div>
        <ForSaleRentDropdown />
      </div>
    </div>
  );
};

export default SearchBox;
