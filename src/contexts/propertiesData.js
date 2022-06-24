import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import {
  getProperties,
  // inputAutoComplete,
  // getPropertyDetails,
} from "../api/index";

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

const PropertiesDataContext = createContext();
// custom context hook
// contains all our properties state & functions
const usePropertiesDataContext = () => {
  const {
    listingsData,
    setListingsData,
    saleRentRadio,
    setSaleRentRadio,
    selectedSort,
    setSelectedSort,
    currentCityNState,
    setCurrentCityNState,
  } = useContext(PropertiesDataContext);

  const fetchProperties = async () => {
    // todo: add functionality to change endpoint based on radio selected(for sale/rent)
    // change names to all affected files (fetchForSale function & also the one in the api index file)
    // change the function's parameters too
    try {
      // city, state, sort, radioClicked
      const data = await getProperties(
        currentCityNState[0],
        currentCityNState[1],
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
  };

  return { fetchProperties };
};

const PropertiesDataProvider = ({ children }) => {
  return (
    <PropertiesDataContext.Provider
      value={{
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
        setDataLength
      }}
    >
      {children}
    </PropertiesDataContext.Provider>
  );
};
/*


*/

export { usePropertiesDataContext, PropertiesDataProvider };
