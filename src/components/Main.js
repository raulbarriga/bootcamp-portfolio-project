import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Listings from "./Listings";
// import listingsData from "../Data/listingsData";
// import ListingDetails from "./ListingDetailsComponent";
/* import Contact from './ContactComponent';*/
/* import About from './AboutComponent'; */
import { getForSale, inputAutoComplete } from "../api/index";

const Main = () => {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         listingsData,
  //     };
  // }
  const [listingsData, setListingsData] = useState([]);
  //   const [propertiesForSale, setPropertiesForSale] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [propertiesPerPage, setPropertiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchText, setSearchText] = useState("");

  const fetchForSale = (city, state) => {
    getForSale(city, state)
      .then((data) => {
        setListingsData(data.listings);
        setDataLength(data.listings.length);
      })
      .catch((err) => console.log(err.message));
  };
  
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
    <div className="main-container">
      <Header />
      <div className="content-wrap">
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/listings"
            render={() => (
              <Listings
                // listingsData={listingsData}
                currentProperties={currentProperties}
                propertiesPerPage={propertiesPerPage}
                dataLength={dataLength}
                currentPage={currentPage}
                paginate={paginate}
                fetchForSale={fetchForSale}
                setCurrentPage={setCurrentPage}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            )}
          />
          {/* <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                        <Route exact path='/contactus' component={Contact} />
                        <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} /> */}
          {/* <Route path="/listings/:listingId" component={SinglePropertyInfo} /> */}
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
