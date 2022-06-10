import React from "react";

import Card from "./Card";

const ShowListingsCards = ({ currentProperties }) => {
  // if (currentProperties === undefined || currentProperties.length === 0) {
  //   return "Sorry did not match any listing.";
  // }

  return (
    <div id="card-columns" className="col-md">
      <div className="row justify-content-center">
        {currentProperties.map((listing, id) => (
          <Card key={id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ShowListingsCards;
