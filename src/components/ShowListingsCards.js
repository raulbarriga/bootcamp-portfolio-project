import React, { useContext } from "react";
import PropertiesDataContext from "../contexts/propertiesData";

import Card from "./Card/Card";

const ShowListingsCards = () => {
  const { currentProperties, fetchPropDetails, fetchPropDetailsv2 } =
    useContext(PropertiesDataContext);

  // if (currentProperties === undefined || currentProperties.length === 0) {
  //   return "Sorry did not match any listing.";
  // }\

  return (
    <div id="card-columns" className="col-md">
      <div className="row justify-content-center">
        {currentProperties.map((listing, index) => {
          return (
            <Card
              key={index}
              handleClick={() => {
                if (listing.listing_id && listing.property_id) {
                  fetchPropDetails(
                    listing.listing_id,
                    listing.property_id,
                    listing.prop_status
                  );
                } else if (listing.plan_id) {
                  fetchPropDetailsv2(listing.plan_id);
                }
              }}
              listing={listing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowListingsCards;
