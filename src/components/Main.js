import React, { useContext, useEffect, useState } from "react";
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
  // select correct path in case the api doesn't have the desired 2 property id's needed for the route path & fetch function
  const { has2Ids } = useContext(PropertiesDataContext);
  const [myPath, setMyPath] = useState(":listing_id/:property_id/:prop_status");

  useEffect(() => {
    if (!has2Ids) {
      setMyPath(":plan_id");
      console.log("myPath: ", myPath);
    }
  }, [has2Ids, myPath]);

  return (
    <PropertiesDataProvider>
      <div className="main-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="listings" element={<Listings />} />
            <Route path="listings">
              <Route path={myPath} element={<ListingDetails />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </PropertiesDataProvider>
  );
};

export default Main;
