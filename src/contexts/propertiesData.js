import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import {
  getProperties,
  getPropertyDetails,
  inputAutoComplete,
} from "../api/index";

const PropertiesDataContext = createContext({});

export const PropertiesDataProvider = ({ children }) => {
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

  const fetchAutoCompleteSearch = useCallback(async (input) => {
    try {
      const data = await inputAutoComplete(input);
      setAutocompResults(data.autocomplete);
      setShowAutoCMenu(true);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

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
        fetchAutoCompleteSearch,
        fetchPropDetails,
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
        paginate,
        currentProperties,
        topOfCardsRef,
        fetchProperties,
        searchText,
        setSearchText,
        autocompResults,
        setAutocompResults,
        autocompleteLimit,
        setAutocompleteLimit,
        showAutoCMenu,
        setShowAutoCMenu,
        selectedProp,
      }}
    >
      {children}
    </PropertiesDataContext.Provider>
  );
};

export default PropertiesDataContext;
