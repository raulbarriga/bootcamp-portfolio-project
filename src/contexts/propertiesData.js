import React, { createContext, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import {
  getProperties,
  getPropertyDetails,
  getPropertyDetailsv2,
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

  // for sort button fetch data (need current city & state)
  const [currentCityNState, setCurrentCityNState] = useLocalStorage(
    "selectedCityAndState",
    JSON.stringify([])
  );

  // 3 states for pagination
  const [dataLength, setDataLength] = useState(0);
  const [propertiesPerPage, setPropertiesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // searchBox states
  const [searchText, setSearchText] = useLocalStorage(
    "localSearchText",
    JSON.stringify()
  );
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
  // to change between 2 path versions for the selected property details page
  const [has2Ids, setHas2Ids] = useState(true);

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
    const localSearchText = JSON.parse(localStorage.getItem("localSearchText"));
    if (localSearchText) {
      setSearchText(localSearchText);
    }

    const radioBtn = JSON.parse(localStorage.getItem("forSaleORent"));
    if (radioBtn) {
      setSaleRentRadio(radioBtn);
    } else {
      // if you clear the local storage set the default
      setSaleRentRadio("For Sale");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // setCurrentCityNState, setSelectedProp, setListingsData

  const fetchProperties = useCallback(
    async (city, state, selectedSort = "relevance", saleRentRadio) => {
      // change the function's parameters too
      console.log(
        "Context file, city: " +
          city +
          ", state: " +
          state +
          ", sort: " +
          selectedSort +
          ", radioClicked: " +
          saleRentRadio
      );
      try {
        // city, state, sort, radioClicked
        const data = await getProperties(
          city,
          state,
          selectedSort,
          saleRentRadio
        );

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [
      currentCityNState,
      setCurrentCityNState,
      setListingsData,
      location.pathname,
      navigate,
    ]
  );

  const fetchPropDetails = async (listing_id, property_id, prop_status) => {
    console.log(
      "single property details: ",
      listing_id + ", " + property_id + ", " + prop_status
    );
    try {
      const data = await getPropertyDetails(
        listing_id,
        property_id,
        prop_status
      );
      console.log("single property details: ", data);
      setSelectedProp(data.listing);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchPropDetailsv2 = async (plan_id) => {
    console.log("fetch prop details v2 ran, plan_id: ", plan_id);

    try {
      const data = await getPropertyDetailsv2(plan_id);
      console.log("single property details: ", data.properties);

      setSelectedProp(data.properties);
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
        has2Ids,
        setHas2Ids,
        fetchPropDetailsv2,
        fetchAutoCompleteSearch,
        fetchPropDetails,
        listingsData,
        setListingsData,
        saleRentRadio,
        setSaleRentRadio,
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
