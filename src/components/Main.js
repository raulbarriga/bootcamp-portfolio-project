import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Listings from "./Listings";
import ListingDetails from "./ListingDetails";
import { PropertiesDataProvider } from "../contexts/propertiesContext";
import { PaginationProvider } from "../contexts/paginateContext";

const Main = () => {
  return (
    <PropertiesDataProvider>
      <div className="main-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="listings"
              element={
                <PaginationProvider>
                  <Listings />
                </PaginationProvider>
              }
            />
            <Route path="listings/:plan_id" element={<ListingDetails />} />
            <Route
              path="listings/:listing_id/:property_id/:prop_status"
              element={<ListingDetails />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </PropertiesDataProvider>
  );
};

export default Main;
