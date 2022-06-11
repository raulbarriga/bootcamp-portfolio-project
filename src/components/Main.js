import React, { useState, useRef, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Listings from "./Listings";
import { withRouter, useLocation } from "react-router";
// import listingsData from "../Data/listingsData";
// import ListingDetails from "./ListingDetailsComponent";
/* import Contact from './ContactComponent';*/
/* import About from './AboutComponent'; */
import { getForSale, inputAutoComplete } from "../api/index";

const Main = ({history}) => {
  let location = useLocation();
  const [listingsData, setListingsData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [propertiesPerPage, setPropertiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchText, setSearchText] = useState("");

  const fetchForSale = (city, state) => {
    getForSale(city, state)
      .then((data) => {
        setListingsData(data.listings);
        setDataLength(data.listings.length);
        if (location.pathname !== "/bootcamp-portfolio-project/listings") {
          history.push("/listings");
        }
        setCurrentPage(1);
      })
      .catch((err) => console.log(err.message));
      console.log("checking path: ", location)
  };

  const topOfCardsRef = useRef(null);

  // console.log("Inside listings view, is listingsData: ", listingsData);

  // get current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = listingsData.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /*
  const SinglePropertyInfo = ({ match }) => {
    console.log(match.params);

    return (
      <ListingDetails
        data={
          this.state.listingsData.filter(
            (listing) => listing.id === +match.params.listingId
          )[0]
        }
      />
    );
  };
*/

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
              />
            )}
          />
          <Route
            exact
            path="/bootcamp-portfolio-project/listings"
            render={() => (
              <Listings
                topOfCardsRef={topOfCardsRef}
                currentProperties={currentProperties}
                propertiesPerPage={propertiesPerPage}
                dataLength={dataLength}
                currentPage={currentPage}
                paginate={paginate}
                fetchForSale={fetchForSale}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            )}
          />
          {/* <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                        <Route exact path='/contactus' component={Contact} />
                        <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} /> */}
          {/* <Route path="/listings/:listingId" component={SinglePropertyInfo} /> */}
          <Redirect to="/bootcamp-portfolio-project/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Main);
