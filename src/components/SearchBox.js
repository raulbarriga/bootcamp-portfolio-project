import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import AutoCompleteMenu from "./AutoCompleteMenu";

const SearchBox = ({
  setSearchText,
  searchText,
  fetchForSale,
  fetchAutoCompleteSearch,
  autocompResults,
  autocompleteLimit,
  showAutoCMenu,
  setShowAutoCMenu
}) => {
  // onSubmitHandler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // var lowerCase = e.target.value.toLowerCase();
    // setSearchText(lowerCase)

    // const str = "Redwood City, CA";
    // fetchForSale(searchText);
    /* */
    // if (!e.target.value) return;

    const str = searchText.split(",");
    const city = str[0];
    const state = str[1].replace(/\s/g, "");
    fetchForSale(city, state); //receive(city, state)

    // console.log(city);
    // console.log(state);
  };

  const resetSearchText = () => {
    setSearchText("");
  };
 
  // from https://stackoverflow.com/a/62601621/13463953
  // it created an infinite loop when I passed a function to the dependency array, but useCallback resolved it where I implement fetchAutoCompleteSearch() in Main.js
  useEffect(() => {
    const timeOutId = setTimeout(() => fetchAutoCompleteSearch(searchText), 500);
    return () => clearTimeout(timeOutId);
  }, [searchText, fetchAutoCompleteSearch])

  return (
    <div id="searchBox" className="row">
      <div className="col-md-12 align-items-end">
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
            {showAutoCMenu && searchText && autocompResults && (
              <AutoCompleteMenu
                autocompResults={autocompResults}
                autocompleteLimit={autocompleteLimit}
                searchText={searchText}
                fetchForSale={fetchForSale}
                setShowAutoCMenu={setShowAutoCMenu}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchBox);
