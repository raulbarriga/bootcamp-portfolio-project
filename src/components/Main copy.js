import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Listings from "./Listings";
import ListingDetails from "./ListingDetails";
import useLocalStorage from "../hooks/useLocalStorage";
import PropertiesDataProvider, {
  usePropertiesDataContext,
  PropertiesDataContext,
} from "../contexts/propertiesData";
import { getProperties } from "../api/index";

const Main = () => {
  let location = useLocation();
  // use useNavigate instead of history to do the same thing (https://stackoverflow.com/a/71477420/13463953)
  let navigate = useNavigate();

  const [listingsData, setListingsData] = useLocalStorage(
    "localAllProperties",
    JSON.stringify([])
  );
  // select to fetch either for sale/rent data
  const [saleRentRadio, setSaleRentRadio] = useLocalStorage(
    "forSaleORent",
    JSON.stringify("For Sale")
  );
  // to pass to fetchProperties
  // options: price_low, price_high, relevance
  const [selectedSort, setSelectedSort] = useState("relevance");

  // for sort button fetch data (need current city & state)
  const [currentCityNState, setCurrentCityNState] = useLocalStorage(
    "selectedCityAndState",
    JSON.stringify([])
  );

  // 3 states for pagination
  const [dataLength, setDataLength] = useState(0);
  const [propertiesPerPage, setPropertiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // searchBox states
  const [searchText, setSearchText] = useState("");
  // for autocomplete search data results
  const [autocompResults, setAutocompResults] = useState([]);
  const [autocompleteLimit, setAutocompleteLimit] = useState(10);
  // click outside for autcomplete menu
  const [showAutoCMenu, setShowAutoCMenu] = useState(false);

  // const {
  //   setListingsData,
  //   setCurrentCityNState,
  //   // currentCityNState,
  //   // selectedSort,
  //   // saleRentRadio,
  //   listingsData,
  //   currentPage,
  //   propertiesPerPage,
  //   setCurrentPage,
  //   setDataLength,
  // } = usePropertiesDataContext();

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
    const localCityNState = JSON.parse(
      localStorage.getItem("selectedCityAndState")
    );
    if (localCityNState) {
      setCurrentCityNState(localCityNState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProperties = async (city, state, sort, radioClicked) => {
    // todo: add functionality to change endpoint based on radio selected(for sale/rent)
    // change names to all affected files (fetchForSale function & also the one in the api index file)
    // change the function's parameters too
    console.log(
      "city: " +
        city +
        ", state: " +
        state +
        ", sort: " +
        sort +
        ", radioClicked: " +
        radioClicked
    );
    try {
      // city, state, sort, radioClicked
      const data = await getProperties(city, state, sort, radioClicked);

      setListingsData(data.listings);
      setDataLength(data.listings.length);
      setCurrentPage(1);
      if (data) {
        setCurrentCityNState([
          data.listings[5].address_new.city,
          data.listings[5].address_new.state_code,
        ]);
        console.log("currentCityNState ran: ", currentCityNState);
      }
    } catch (error) {
      console.log(error.message);
    }
    if (location.pathname !== "/listings") {
      navigate("/listings");
    }
  };

  /*
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
*/
  const topOfCardsRef = useRef(null);

  // get current properties
  // these are the actual properties that are shown (done like this for pagination)
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = listingsData.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  // change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PropertiesDataContext.Provider
      value={{
        fetchProperties,
        listingsData,
        setListingsData,
        saleRentRadio,
        setSaleRentRadio,
        selectedSort,
        setSelectedSort,
        currentCityNState,
        setCurrentCityNState,
        propertiesPerPage,
        setPropertiesPerPage,
        currentPage,
        setCurrentPage,
        dataLength,
        setDataLength,
      }}
    >
      <div ref={topOfCardsRef} className="main-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                // setSearchText={setSearchText}
                // searchText={searchText}
                // fetchProperties={fetchProperties}
                // fetchAutoCompleteSearch={fetchAutoCompleteSearch}
                // autocompResults={autocompResults}
                // autocompleteLimit={autocompleteLimit}
                // showAutoCMenu={showAutoCMenu}
                // setShowAutoCMenu={setShowAutoCMenu}
                />
              }
            />
            <Route
              path="listings"
              element={
                <Listings
                  //   fetchPropDetails={fetchPropDetails}
                  //   currentCityNState={currentCityNState}
                  //   showAutoCMenu={showAutoCMenu}
                  //   setShowAutoCMenu={setShowAutoCMenu}
                  topOfCardsRef={topOfCardsRef}
                  currentProperties={currentProperties}
                  //   propertiesPerPage={propertiesPerPage}
                  //   dataLength={dataLength}
                  //   currentPage={currentPage}
                  paginate={paginate}
                  //   fetchProperties={fetchProperties}
                  //   searchText={searchText}
                  //   setSearchText={setSearchText}
                  //   fetchAutoCompleteSearch={fetchAutoCompleteSearch}
                  //   autocompResults={autocompResults}
                  //   autocompleteLimit={autocompleteLimit}
                  //   radioClicked={radioClicked}
                  //   setRadioClicked={setRadioClicked}
                  //   setSelectedSort={setSelectedSort}
                />
              }
            />
            <Route path="listings">
              <Route
                path=":listing_id/:property_id/:prop_status"
                element={
                  <ListingDetails
                  // selectedProp={selectedProp}
                  />
                }
              />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </PropertiesDataContext.Provider>
  );
};

export default Main;
