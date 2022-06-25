import React, { useContext } from "react";
// import Filter from './ListingsFilterComponent';
// import ListingsFilter from "./ListingsFilter";
import Pagination from "./Pagination/Paginate";
import FilterSortBtns from "./FilterSortButtons/FilterSortBtns";
import SearchBox from "./SearchBox/SearchBox";
import ShowListingsCards from "./ShowListingsCards";
import PropertiesDataContext from "../contexts/propertiesData";

const Listings = () => {
  const { currentProperties } = useContext(PropertiesDataContext);

  return (
    <div className="container-fluid">
      {/* Location search box */}
      <SearchBox />

      {/* Filter & Sort Toggle Buttons/Row */}
      <FilterSortBtns />

      {/* Filter row/Toggle Menu/Row */}
      <div className="row">
        {/* <ListingsFilter /> */}
        {/* Property Listings */}
        {currentProperties && <ShowListingsCards />}
      </div>
      <Pagination />
    </div>
  );
};

export default Listings;
