import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Listings from "./Listings";
import ListingDetails from "./ListingDetails";
import PropertiesDataContext, {
  PropertiesDataProvider,
} from "../contexts/propertiesData";

const Main = () => {
  const { topOfCardsRef } = useContext(PropertiesDataContext);

  return (
    <PropertiesDataProvider>
      <div ref={topOfCardsRef} className="main-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="listings" element={<Listings />} />
            <Route path="listings">
              <Route
                path=":listing_id/:property_id/:prop_status"
                element={<ListingDetails />}
              />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </PropertiesDataProvider>
  );
};

export default Main;
