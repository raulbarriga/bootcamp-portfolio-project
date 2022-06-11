import React from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ setSearchText, searchText, fetchForSale }) => {
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

    console.log(city);
    console.log(state);
  };
  console.log("searchText: ", searchText);

  const resetSearchText = () => {
    setSearchText("")
  }

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
                <div className="btn-group" role="group" aria-label="Basic example">
                  {searchText !== "" && (
                    <button type="reset" onClick={resetSearchText} className="btn bg-white position-relative">
                      <FontAwesomeIcon className="fas" icon={faTimes} />
                    </button>
                  )}
                  <button type="submit" className="btn bg-white position-relative">
                    <FontAwesomeIcon className="fas" icon={faSearch} /> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchBox);
