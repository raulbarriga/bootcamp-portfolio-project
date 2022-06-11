import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBed,
//   faToilet,
//   faMapMarkerAlt,
// } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
// import $ from "jquery";
// import Filter from './ListingsFilterComponent';
// import ListingDetails from "./ListingDetailsComponent";
import ListingsFilter from "./ListingsFilter";
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
  fetchForSale,
  setSearchText,
  searchText
}) => {
  /*
  constructor(props) {
      super(props);
      this.state = {
          filteredData: this.props.listingsData,
          propertyStatus: "Type",
          city: "",
          houses: false,
          manufactured: false,
          condosCoOps: false,
          multiFamily: false,
          apartments: false,
          lotsLand: false,
          townhomes: false,
          bedrooms: 0,
          bathrooms: 0,
          minPrice: 0,
          maxPrice: 75000000,
          minArea: 0,
          maxArea: 50000,
          search: "",
      };
  }
  */
  
  /*
    UNSAFE_componentWillMount = () => {
        //Initial render is by prices from high to low
        var listingsData = this.props.listingsData.sort((a, b) => {
            return b.price - a.price;
        });

        // Filter Toggle Button
        $(function () {
            $("#filter-btn").click(function () {
                $("#filter").toggle();
            });
        });

        // Property Type Button Dropdown Remains Open on Checkbox Selection
        $(".checkbox-menu").on("change", "input[type='checkbox']", function () {
            $(this).closest("li").toggleClass("active", this.checked);
        });

        $(document).on("click", ".allow-focus", function (e) {
            e.stopPropagation();
        });

        this.setState({
            listingsData,
        });
    };
    */


    /*
  const handleInputChange = (event) => {
    // console.log(event.target.value)

    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        //console.log(this.state);
        this.filteredData();
      }
    );
  };
  */
/*
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //Search
    if (this.state.search !== "") {
      var newData = this.state.listingsData.filter((item) => {
        var city = item.city.toLowerCase();
        var searchText = this.state.search.toLowerCase();
        var n = city.match(searchText);

        if (n == null) {
          return false;
        }
        return true;
      });
    }

    this.setState({
      filteredData: newData,
    });
  };
*/
  

  /*
    componentDidUpdate = () => {
        const { listingsData } = this.props;

        //after initial page render, if filter options were used & went back to defaults,
        //this'll get the default properties back to render
        if (
            this.state.filteredData === undefined ||
            this.state.filteredData.length === 0
        ) {
            // console.log("here");
            this.setState({
                filteredData: listingsData,
            });
        }
    };
    */

    /*
  const filteredData = () => {
    const { listingsData } = this.props;
    const {
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      bedrooms,
      bathrooms,
      propertyStatus,
    } = this.state;
    var newData = [];

    if (
      minPrice !== 0 ||
      maxPrice !== 75000000 ||
      minArea !== 0 ||
      maxArea !== 50000 ||
      bedrooms !== 0 ||
      bathrooms !== 0
    ) {
      var otherFilters = listingsData.filter((item) => {
        return (
          item.price >= minPrice &&
          item.price <= maxPrice &&
          item.area >= minArea &&
          item.area <= maxArea &&
          item.rooms >= bedrooms &&
          item.bathrooms >= bathrooms
        );
      });
      newData = newData.concat(otherFilters);
    }

    // if (this.state.city !== "") {
    //     newData = newData.filter((item) => {
    //         return item.city === this.state.city;
    //     });
    // }

    // All the following check if newData is empty or not & works
    // Rent or Sale
    if (propertyStatus !== "Type") {
      if (newData === undefined || newData.length === 0) {
        if (propertyStatus === "rent") {
          newData = listingsData.filter((item) => {
            return item.propertyStatus === "rent";
          });
        } else {
          newData = listingsData.filter((item) => {
            return item.propertyStatus === "sale";
          });
        }
      }
      if (this.state.propertyStatus === "sale") {
        newData = newData.filter((item) => {
          return item.propertyStatus === "sale";
        });
      } else {
        newData = newData.filter((item) => {
          return item.propertyStatus === "rent";
        });
      }
    }

    if (this.state.houses !== false) {
      if (newData === undefined || newData.length === 0) {
        var allHouses = listingsData.filter((item) => {
          return item.homeType === "house";
        });
        newData = newData.concat(allHouses);
      }
      //if newData has something (it's not empty)
      if (newData !== undefined || newData.length !== 0) {
        //this is for when I use another filter first
        if (
          minPrice !== 0 ||
          maxPrice !== 75000000 ||
          minArea !== 0 ||
          maxArea !== 50000 ||
          bedrooms !== 0 ||
          bathrooms !== 0
        ) {
          newData = newData.filter((item) => {
            return item.homeType === "house";
          });
        }
        //if property type is the first filter used
        allHouses = listingsData.filter((item) => {
          return item.homeType === "house";
        });
        newData = newData.concat(allHouses);
      } else {
        allHouses = listingsData.filter((item) => {
          return item.homeType === "house";
        });
        newData = newData.concat(allHouses);
      }
      //console.log("newData", newData);
    }
    if (this.state.manufactured !== false) {
      if (newData === undefined || newData.length === 0) {
        var allManufactured = listingsData.filter((item) => {
          return item.homeType === "manufactured";
        });
        newData = newData.concat(allManufactured);
      }
      //if newData has something (it's not empty)
      if (newData !== undefined || newData.length !== 0) {
        //this is for when I use another filter first
        if (
          minPrice !== 0 ||
          maxPrice !== 75000000 ||
          minArea !== 0 ||
          maxArea !== 50000 ||
          bedrooms !== 0 ||
          bathrooms !== 0
        ) {
          newData = newData.filter((item) => {
            return item.homeType === "manufactured";
          });
        }
        //if property type is the first filter used
        allManufactured = listingsData.filter((item) => {
          return item.homeType === "manufactured";
        });
        newData = newData.concat(allManufactured);
      } else {
        allManufactured = listingsData.filter((item) => {
          return item.homeType === "manufactured";
        });
        newData = newData.concat(allManufactured);
      }
      //console.log("newdata with concat manufactured", newData);
    }
    if (this.state.condosCoOps !== false) {
      if (newData === undefined || newData.length === 0) {
        var allCondosCoOps = listingsData.filter((item) => {
          return item.homeType === "condo" || item.homeType === "coOp";
        });
        newData = newData.concat(allCondosCoOps);
      }
      //if newData has something (it's not empty)
      if (newData !== undefined || newData.length !== 0) {
        //this is for when I use another filter first
        if (
          minPrice !== 0 ||
          maxPrice !== 75000000 ||
          minArea !== 0 ||
          maxArea !== 50000 ||
          bedrooms !== 0 ||
          bathrooms !== 0
        ) {
          newData = newData.filter((item) => {
            return item.homeType === "condo" || item.homeType === "coOp";
          });
        }
        allCondosCoOps = listingsData.filter((item) => {
          return item.homeType === "condo" || item.homeType === "coOp";
        });
        newData = newData.concat(allCondosCoOps);
      } else {
        allCondosCoOps = listingsData.filter((item) => {
          return item.homeType === "condo" || item.homeType === "coOp";
        });
        newData = newData.concat(allCondosCoOps);
      }
    }
    if (this.state.multiFamily !== false) {
      if (newData === undefined || newData.length === 0) {
        var allMultiFamily = listingsData.filter((item) => {
          return item.homeType === "multi-family";
        });
        newData = newData.concat(allMultiFamily);
      }

      //if newData has something (it's not empty)
      if (newData !== undefined || newData.length !== 0) {
        //this is for when I use another filter first
        if (
          minPrice !== 0 ||
          maxPrice !== 75000000 ||
          minArea !== 0 ||
          maxArea !== 50000 ||
          bedrooms !== 0 ||
          bathrooms !== 0
        ) {
          newData = newData.filter((item) => {
            return item.homeType === "multi-family";
          });
        }
        allMultiFamily = listingsData.filter((item) => {
          return item.homeType === "multi-family";
        });
        newData = newData.concat(allMultiFamily);
      } else {
        allMultiFamily = listingsData.filter((item) => {
          return item.homeType === "multi-family";
        });
        newData = newData.concat(allMultiFamily);
      }
    }
    if (this.state.apartments !== false) {
      if (newData === undefined || newData.length === 0) {
        var allApartments = listingsData.filter((item) => {
          return item.homeType === "apartment";
        });
        newData = newData.concat(allApartments);
      }

      //if newData has something (it's not empty)
      if (newData !== undefined || newData.length !== 0) {
        //this is for when I use another filter first
        if (
          minPrice !== 0 ||
          maxPrice !== 75000000 ||
          minArea !== 0 ||
          maxArea !== 50000 ||
          bedrooms !== 0 ||
          bathrooms !== 0
        ) {
          newData = newData.filter((item) => {
            return item.homeType === "apartment";
          });
        }
        allApartments = listingsData.filter((item) => {
          return item.homeType === "apartment";
        });
        newData = newData.concat(allApartments);
      } else {
        allApartments = listingsData.filter((item) => {
          return item.homeType === "apartment";
        });
        newData = newData.concat(allApartments);
      }
    }
    if (this.state.lotsLand !== false) {
      if (newData === undefined || newData.length === 0) {
        var allLotsLand = listingsData.filter((item) => {
          return item.homeType === "lot" || item.homeType === "land";
        });
        newData = newData.concat(allLotsLand);
      }

      //if newData has something (it's not empty)
      if (newData !== undefined || newData.length !== 0) {
        //this is for when I use another filter first
        if (
          minPrice !== 0 ||
          maxPrice !== 75000000 ||
          minArea !== 0 ||
          maxArea !== 50000 ||
          bedrooms !== 0 ||
          bathrooms !== 0
        ) {
          newData = newData.filter((item) => {
            return item.homeType === "lot" || item.homeType === "land";
          });
        }
        allLotsLand = listingsData.filter((item) => {
          return item.homeType === "lot" || item.homeType === "land";
        });
        newData = newData.concat(allLotsLand);
      } else {
        allLotsLand = listingsData.filter((item) => {
          return item.homeType === "lot" || item.homeType === "land";
        });
        newData = newData.concat(allLotsLand);
      }
    }
    if (this.state.townhomes !== false) {
      if (newData === undefined || newData.length === 0) {
        var allTownhomes = listingsData.filter((item) => {
          return item.homeType === "townhome";
        });
        newData = newData.concat(allTownhomes);
      }

      //if newData has something (it's not empty)
      if (newData !== undefined || newData.length !== 0) {
        //this is for when I use another filter first
        if (
          minPrice !== 0 ||
          maxPrice !== 75000000 ||
          minArea !== 0 ||
          maxArea !== 50000 ||
          bedrooms !== 0 ||
          bathrooms !== 0
        ) {
          newData = newData.filter((item) => {
            return item.homeType === "townhome";
          });
        }
        allTownhomes = listingsData.filter((item) => {
          return item.homeType === "townhome";
        });
        newData = newData.concat(allTownhomes);
      } else {
        allTownhomes = listingsData.filter((item) => {
          return item.homeType === "townhome";
        });
        newData = newData.concat(allTownhomes);
      }
    }
    //console.log("after concating, before set", newData);
    // will remove all duplicate items automatically with set
    //convert newData array to set
    newData = new Set(newData);
    // convert back to array now that all duplicates are removed
    newData = [...newData];

    this.setState(
      {
        filteredData: newData,
      },
      () => {
        //console.log(this.state.filteredData);
        //console.log(newData);
      }
    );
  };
  */

  /*
  const ShowProperties = () => {
    const { filteredData } = this.state;

    if (filteredData === undefined || filteredData.length === 0) {
      return "Sorry your filter did not match any listing.";
    }

    var initialView = filteredData.map((listing, id) => {
      return (
        <div className="card" key={id}>
          <Link to={`/bootcamp-portfolio-project/listings/${listing.id}`} className="router-link">
            <img
              src={listing.image}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div id="card-body" className="card-body">
              <div className="row d-flex justify-content-between">
                <div className="col-sm-auto">
                  <h5 className="card-title price">
                    $ {listing.price.toLocaleString("en")}
                  </h5>
                </div>
                <div className="col-sm-auto">
                  <h6 className="card-title details">
                    <FontAwesomeIcon className="fas" icon={faBed} />{" "}
                    {listing.rooms} bds &#124;{" "}
                    <FontAwesomeIcon className="fas" icon={faToilet} />{" "}
                    {listing.bathrooms} ba &#124;{" "}
                    {listing.area.toLocaleString("en")} sqft
                  </h6>
                </div>
              </div>
              <span className="text-dark">
                <strong className="card-text">
                  <FontAwesomeIcon className="fas" icon={faMapMarkerAlt} />{" "}
                  <span>{listing.address}</span> <span>{listing.city}</span>{" "}
                  <span>{listing.state}</span> <span>{listing.zipCode}</span>
                </strong>
              </span>
            </div>
            <div className="card-footer text-muted">
              For {listing.propertyStatus}
            </div>
          </Link>
        </div>
      );
    });

    return initialView;
  };
  */

  

  return (
    <div className="container-fluid">
      {/* Location search box */}
      <SearchBox 
      setSearchText={setSearchText}
      searchText={searchText}
      fetchForSale={fetchForSale}
      />

      {/* Filter & Sort Toggle Buttons/Row */}
      <FilterSortBtns />

      {/* Filter row/Toggle Menu/Row */}
      <div className="row">
        {/* todo: pass data here & replace data values */}
        {/* <ListingsFilter /> */}
        {/* Property Listings */}
        {/* <div id="card-columns" className="col-md"> */}
          {/* <div className="row"> */}
            {currentProperties && <ShowListingsCards
             currentProperties={currentProperties} />}
          {/* </div> */}
        {/* </div> */}
      </div>
        <Pagination 
        topOfCardsRef={topOfCardsRef}
        propertiesPerPage={propertiesPerPage}
        dataLength={dataLength}
        currentPage={currentPage}
        paginate={paginate} />
    </div>
  );
};

export default withRouter(Listings);
