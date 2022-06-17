import React, { useState, useRef, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Listings from "./Listings";
import { withRouter, useLocation } from "react-router";
import { getForSale, inputAutoComplete } from "../api/index";

const Main = ({ history }) => {
  let location = useLocation();
  const [listingsData, setListingsData] = useState([]);
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

  const fetchForSale = async (city, state, sort) => {
    try {
      const data = await getForSale(city, state, sort);
      setListingsData(data.listings);
      setDataLength(data.listings.length);
      setCurrentPage(1);
      if (data) {
        console.log("main file data: ", data.listings[5].address_new.city + ", " +  data.listings[5].address_new.state_code);
        setCurrentCityNState([data.listings[5].address_new.city, data.listings[5].address_new.state_code])
        
      }
    } catch (error) {
      console.log(error.message);
    }
    if (location.pathname !== "/bootcamp-portfolio-project/listings") {
      history.push("/bootcamp-portfolio-project/listings");
    } else {
      return;
    }
    
  };
  console.log("main file currentCityNState: ",currentCityNState);
  

  const fetchAutoCompleteSearch = useCallback((input) => {
    inputAutoComplete(input)
      .then((data) => {
        setAutocompResults(data.autocomplete);
        setShowAutoCMenu(true);
      })
      .catch((err) => console.log(err.message));
  }, []);

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
        <Switch>
          <Route
            path="/bootcamp-portfolio-project/home"
            render={() => (
              <Home
                setSearchText={setSearchText}
                searchText={searchText}
                fetchForSale={fetchForSale}
                fetchAutoCompleteSearch={fetchAutoCompleteSearch}
                autocompResults={autocompResults}
                autocompleteLimit={autocompleteLimit}
                showAutoCMenu={showAutoCMenu}
                setShowAutoCMenu={setShowAutoCMenu}
              />
            )}
          />
          <Route
            exact
            path="/bootcamp-portfolio-project/listings"
            render={() => (
              <Listings
              currentCityNState={currentCityNState}
                showAutoCMenu={showAutoCMenu}
                setShowAutoCMenu={setShowAutoCMenu}
                topOfCardsRef={topOfCardsRef}
                currentProperties={currentProperties}
                propertiesPerPage={propertiesPerPage}
                dataLength={dataLength}
                currentPage={currentPage}
                paginate={paginate}
                fetchForSale={fetchForSale}
                searchText={searchText}
                setSearchText={setSearchText}
                fetchAutoCompleteSearch={fetchAutoCompleteSearch}
                autocompResults={autocompResults}
                autocompleteLimit={autocompleteLimit}
              />
            )}
          />
          <Redirect to="/bootcamp-portfolio-project/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Main);
