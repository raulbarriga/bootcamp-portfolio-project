import React from "react";
// import Filter from './ListingsFilterComponent';
// import ListingsFilter from "./ListingsFilter";
import Pagination from "./Pagination";
import FilterSortBtns from "./FilterSortBtns";
import SearchBox from "./SearchBox";
import ShowListingsCards from "./ShowListingsCards";

const Listings = ({
  topOfCardsRef,
  currentProperties,
  propertiesPerPage,
  dataLength,
  currentPage,
  paginate,
  fetchProperties,
  setSearchText,
  searchText,
  fetchAutoCompleteSearch,
  autocompResults,
  autocompleteLimit,
  showAutoCMenu,
  setShowAutoCMenu,
  currentCityNState,
  fetchPropDetails,
  radioClicked,
  setRadioClicked,
}) => {
  return (
    <div className="container-fluid">
      {/* Location search box */}
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

      {/* Filter & Sort Toggle Buttons/Row */}
      <FilterSortBtns
        fetchProperties={fetchProperties}
        currentCityNState={currentCityNState}
        currentProperties={currentProperties}
      />

      {/* Filter row/Toggle Menu/Row */}
      <div className="row">
        {/* todo: pass data here & replace data values */}
        {/* <ListingsFilter /> */}
        {/* Property Listings */}
        {currentProperties && (
          <ShowListingsCards
            currentProperties={currentProperties}
            fetchPropDetails={fetchPropDetails}
          />
        )}
      </div>
      <Pagination
        topOfCardsRef={topOfCardsRef}
        propertiesPerPage={propertiesPerPage}
        dataLength={dataLength}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Listings;
