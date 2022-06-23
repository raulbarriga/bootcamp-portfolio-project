import React from "react";

import Card from "./Card";

const ShowListingsCards = ({ currentProperties, fetchPropDetails }) => {
  // if (currentProperties === undefined || currentProperties.length === 0) {
  //   return "Sorry did not match any listing.";
  // }
  // const handleClick = (e, listing_id, property_id, prop_status) => {
    // e.stopPropagation();
    // console.log("on Click pressed");
    // fetchPropDetails(listing_id, property_id, prop_status)
  // };

  // fetchPropDetails(listing.listing_id, listing.property_id, listing.prop_status)
  return (
    <div id="card-columns" className="col-md">
      <div className="row justify-content-center">
        {currentProperties.map((listing, index) => {
          return (
            <Card
              key={index}
              fetchPropDetails={fetchPropDetails}
              handleClick={() =>
                fetchPropDetails(
                  listing.listing_id,
                  listing.property_id,
                  listing.prop_status
                )
              }
              listing={listing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowListingsCards;
