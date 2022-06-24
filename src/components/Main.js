import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Listings from "./Listings";
import ListingDetails from "./ListingDetails";
// import {
//   getProperties,
//   inputAutoComplete,
//   getPropertyDetails,
// } from "../api/index";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  PropertiesDataProvider,
  usePropertiesDataContext,
} from "../contexts/propertiesData";

const Main = () => {
  

  // searchBox states
  const [searchText, setSearchText] = useState("");
  // for autocomplete search data results
  const [autocompResults, setAutocompResults] = useState([]);
  const [autocompleteLimit, setAutocompleteLimit] = useState(10);
  // click outside for autcomplete menu
  const [showAutoCMenu, setShowAutoCMenu] = useState(false);

  const {
    setListingsData,
    setCurrentCityNState,
    currentCityNState,
    selectedSort,
    saleRentRadio,
    listingsData,
    currentPage,
    propertiesPerPage,
    setCurrentPage,
    setDataLength
  } = usePropertiesDataContext();

  // state per single property
  const [selectedProp, setSelectedProp] = useLocalStorage(
    "localSelectedProperty",
    JSON.stringify([])
  );

  // useEffect(() => {
  //   if (selectedSort === "Relevance") {
  //     setSelectedSort("relevance");
  //   } else if (selectedSort === "Price (High to Low"){
  //     setSelectedSort("price_high");
  //   } else {
  //     setSelectedSort("price_low");
  //   }
  // }, [selectedSort]);

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
    <div ref={topOfCardsRef} className="main-container">
      <Header />
      <PropertiesDataProvider>
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
      </PropertiesDataProvider>
      <Footer />
    </div>
  );
};

export default Main;
