import React from "react";
// import Filter from './ListingsFilterComponent';
// import ListingsFilter from "./ListingsFilter";
import Pagination from "./Pagination/Paginate";
import FilterSortBtns from "./FilterSortButtons/FilterSortBtns";
import SearchBox from "./SearchBox";
import ShowListingsCards from "./ShowListingsCards";

/*
// previous props:

  
  
  
  
  
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
  setSelectedSort
*/

const Listings = ({
  currentProperties,
  topOfCardsRef,
  paginate
}) => {
  return (
    <div className="container-fluid">
      {/* Location search box */}
      {/* 
      // previous props for SearchBox
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

      */}
      <SearchBox
        
      />

      {/* Filter & Sort Toggle Buttons/Row */}
      {/* 
       // fetchProperties={fetchProperties}
        // currentCityNState={currentCityNState}
        // setSelectedSort={setSelectedSort}
        // currentProperties={currentProperties}
      */}
      <FilterSortBtns
       
      />

      {/* Filter row/Toggle Menu/Row */}
      <div className="row">
        {/* todo: pass data here & replace data values */}
        {/* <ListingsFilter /> */}
        {/* Property Listings */}
        {currentProperties && (
          <ShowListingsCards
            currentProperties={currentProperties}
            // fetchPropDetails={fetchPropDetails}
          />
        )}
      </div>
      <Pagination
        topOfCardsRef={topOfCardsRef}
        paginate={paginate}
      />
    </div>
  );
};

export default Listings;
