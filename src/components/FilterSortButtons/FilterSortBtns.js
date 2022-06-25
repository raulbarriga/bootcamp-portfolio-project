import React, { useContext } from "react";
import PropertiesDataContext from "../../contexts/propertiesData";

import "./FilterSortBtns.css";

const FilterSortBtns = () => {
  const { setSelectedSort } = useContext(PropertiesDataContext);
  // as per the api parameters https://rapidapi.com/apidojo/api/realty-in-us/
  const sortOptions = [
    "Relevance",
    "Price (High to Low)",
    "Price (Low to High)",
  ];

  return (
    <div id="filter-and-sort-row" className="row">
      <div className="col-sm-12 d-flex flex-nowrap float-right justify-content-end dropdown">
        {/* <button id="filter-btn" className="btn order-1 mr-2" type="button">
          Filter
        </button> */}
        <div className="btn-group">
          <button
            type="button"
            id="sort-btn"
            className="btn dropdown-toggle order-2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              backgroundColor: "#f8f9fa",
              borderColor: "#ced4da",
            }}
          >
            Sort
          </button>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="sort-btn"
          >
            {sortOptions.map((option, index) => (
              <button
                key={index}
                className="dropdown-item"
                type="button"
                value={option}
                onClick={(e) => {
                  let selection = e.target.value;
                  if (selection === "Relevance") {
                    setSelectedSort("relevance");
                  } else if (selection === "Price (High to Low)") {
                    setSelectedSort("price_high");
                  } else {
                    setSelectedSort("price_low");
                  }
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBtns;

/*
<button
              className="dropdown-item"
              type="button"
              onClick={() => {
                if (
                  currentProperties === undefined ||
                  currentProperties.length === 0
                ) {
                  return;
                } else {
                  setSelectedSort("relevance");
                }
              }}
            >
              Relevance
            </button>
            
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                if (
                  currentProperties === undefined ||
                  currentProperties.length === 0
                ) {
                  return;
                } else {
                  setSelectedSort("price_low");
                }
              }}
            >
              Price (Low to High)
            </button>
*/
