import React, { useState, useRef, useCallback, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Listings from "./Listings";
import ListingDetails from "./ListingDetails";
import {
  getProperties,
  inputAutoComplete,
  getPropertyDetails,
} from "../api/index";
import useLocalStorage from "../hooks/useLocalStorage";

const Main = () => {
  let location = useLocation();
  // use useNavigate instead of history to do the same thing (https://stackoverflow.com/a/71477420/13463953)
  let navigate = useNavigate();
  const [listingsData, setListingsData] = useLocalStorage(
    "localAllProperties",
    JSON.stringify([])
  );
  const [radioClicked, setRadioClicked] = useLocalStorage("forSaleORent", JSON.stringify("For Sale"));
  const [dataLength, setDataLength] = useState(0);
  const [propertiesPerPage, setPropertiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchText, setSearchText] = useState("");
  // for autocomplete search data results
  const [autocompResults, setAutocompResults] = useState([]);
  const [autocompleteLimit, setAutocompleteLimit] = useState(10);

  // click outside for autcomplete menu
  const [showAutoCMenu, setShowAutoCMenu] = useState(false);
  // for sort button fetch data (need current city & state)
  const [currentCityNState, setCurrentCityNState] = useState([]);
  // to pass to fetchProperties
  // options: price_low, price_high, relevant
  const [selectedSort, setSelectedSort] = useState("relevant");
  // state per single property
  const [selectedProp, setSelectedProp] = useLocalStorage(
    "localSelectedProperty",
    JSON.stringify([])
  );

  useEffect(() => {
    const allProperties = JSON.parse(
      localStorage.getItem("localAllProperties")
    );
    if (allProperties) {
      setListingsData(allProperties);
      setDataLength(allProperties.length);
    }
    const oneProperty = JSON.parse(
      localStorage.getItem("localSelectedProperty")
    );
    if (oneProperty) {
      setSelectedProp(oneProperty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchProperties = async (city, state, selectedSort, radioClicked) => {
      // todo: add functionality to change endpoint based on radio selected(for sale/rent)
      // change names to all affected files (fetchForSale function & also the one in the api index file)
      // change the function's parameters too
      try {
        // city, state, sort, radioClicked
        const data = await getProperties(currentCityNState[0], currentCityNState[1], );
  
        setListingsData(data.listings);
        setDataLength(data.listings.length);
        setCurrentPage(1);
        if (data) {
          setCurrentCityNState([
            data.listings[5].address_new.city,
            data.listings[5].address_new.state_code,
          ]);
          console.log("currentCityNState: ", currentCityNState);
        }
      } catch (error) {
        console.log(error.message);
      }
      if (location.pathname !== "/listings") {
        navigate("/listings");
      }
    };
    fetchProperties();
  }, [currentCityNState, location.pathname, navigate, setListingsData, selectedSort])

  const fetchAutoCompleteSearch = useCallback(async (input) => {
    // inputAutoComplete(input)
    //   .then((data) => {
    //     setAutocompResults(data.autocomplete);
    //     setShowAutoCMenu(true);
    //   })
    //   .catch((err) => console.log(err.message));
    try {
      const data = await inputAutoComplete(input);
      setAutocompResults(data.autocomplete);
      setShowAutoCMenu(true);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const fetchPropDetails = async (listing_id, property_id, prop_status) => {
    try {
      const data = await getPropertyDetails(
        listing_id,
        property_id,
        prop_status
      );
      console.log("single property details: ", data.listing);
      setSelectedProp(data.listing);
    } catch (error) {
      console.log(error.message);
    }
  };

  const topOfCardsRef = useRef(null);

  // get current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = listingsData.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div ref={topOfCardsRef} className="main-container">
      <Header />
      <div className="content-wrap">
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                setSearchText={setSearchText}
                searchText={searchText}
                fetchProperties={fetchProperties}
                fetchAutoCompleteSearch={fetchAutoCompleteSearch}
                autocompResults={autocompResults}
                autocompleteLimit={autocompleteLimit}
                showAutoCMenu={showAutoCMenu}
                setShowAutoCMenu={setShowAutoCMenu}
                radioClicked={radioClicked}
                setRadioClicked={setRadioClicked}
              />
            }
          />
          <Route
            path="listings"
            element={
              <Listings
                fetchPropDetails={fetchPropDetails}
                currentCityNState={currentCityNState}
                showAutoCMenu={showAutoCMenu}
                setShowAutoCMenu={setShowAutoCMenu}
                topOfCardsRef={topOfCardsRef}
                currentProperties={currentProperties}
                propertiesPerPage={propertiesPerPage}
                dataLength={dataLength}
                currentPage={currentPage}
                paginate={paginate}
                fetchProperties={fetchProperties}
                searchText={searchText}
                setSearchText={setSearchText}
                fetchAutoCompleteSearch={fetchAutoCompleteSearch}
                autocompResults={autocompResults}
                autocompleteLimit={autocompleteLimit}
                radioClicked={radioClicked}
                setRadioClicked={setRadioClicked}
              />
            }
          />
          <Route path="listings">
            <Route
              path=":listing_id/:property_id/:prop_status"
              element={<ListingDetails selectedProp={selectedProp} />}
            />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
