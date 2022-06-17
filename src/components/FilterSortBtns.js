import React from "react";

const FilterSortBtns = ({
  fetchForSale,
  currentCityNState,
  currentProperties,
}) => {
  return (
    <div id="filter-and-sort-row" className="row">
      <div className="col-sm-12 d-flex flex-nowrap float-right justify-content-end dropdown">
        <button id="filter-btn" className="btn order-1 mr-2" type="button">
          Filter
        </button>
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
                  fetchForSale(
                    currentCityNState[0],
                    currentCityNState[1],
                    "relevance"
                  );
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
                  fetchForSale(
                    currentCityNState[0],
                    currentCityNState[1],
                    "price_high"
                  );
                }
              }}
            >
              Price (High to Low)
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
                  fetchForSale(
                    currentCityNState[0],
                    currentCityNState[1],
                    "price_low"
                  );
                }
              }}
            >
              Price (Low to High)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBtns;
