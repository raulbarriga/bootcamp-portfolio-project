import React from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ 
    setSearchText, 
    searchText, 
    setCurrentPage,
    fetchForSale,
    // history
}) => {
    // onSubmitHandler 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // var lowerCase = e.target.value.toLowerCase();
    // setSearchText(lowerCase)

    // const str = "Redwood City, CA";
    // fetchForSale(searchText);
    /* */
    const str = searchText.split(",");
    const city = str[0];
    const state = str[1].replace(/\s/g, "");
    fetchForSale(city, state); //receive(city, state)
    setCurrentPage(1);
    
    console.log(city);
    console.log(state);
  };
  console.log("searchText: ", searchText);

  return (
    <div className="row">
      <div className="col-md-12 align-items-end">
        <div className="form-group">
          <div className="form-field search-box">
            <form onSubmit={onSubmitHandler}>
              <input
                type="search"
                name="search"
                value={searchText}
                className="form-control"
                placeholder="Enter City or Zip Code"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit" className="btn bg-white">
                <FontAwesomeIcon className="fas" icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchBox);
