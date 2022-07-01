import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  faBed,
  faToilet,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.css";

const Card = ({ listing, handleClick }) => {
  const [linkpath, setLinkpath] = useState(`:${listing.listing_id}/:${listing.property_id}/:${listing.prop_status}`);
  // let linkPath;
  useEffect(() => {
    //  linkPath = (listing) => {
    if (listing.listing_id && listing.property_id) {
      console.log(
        "both ids found: ",
        listing.listing_id + ", " + listing.property_id
      );
      setLinkpath(
        `:${listing.listing_id}/:${listing.property_id}/:${listing.prop_status}`
      );
    } else {
      console.log("Plan ID: ", listing.plan_id);
      setLinkpath(`:${listing.plan_id}`);
    }
    // };
  }, [listing]);

  return (
    <>
      <div id="card" className="card" onClick={handleClick}>
        <Link
          // `:${listing.listing_id}/:${listing.property_id}/:${listing.prop_status}`
          // to={() => linkPath(listing)}
          to={linkpath}
          className="router-link"
        >
          <img
            src={listing.photo}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div id="card-body" className="card-body">
            <div className="row d-flex justify-content-between">
              <div className="col-sm-auto">
                <h5 className="card-title price">{listing.price}</h5>
              </div>
              <div className="col-sm-auto">
                <h6 className="card-title details">
                  <FontAwesomeIcon className="fas" icon={faBed} />{" "}
                  {listing.beds} bds &#124;{" "}
                  <FontAwesomeIcon className="fas" icon={faToilet} />{" "}
                  {listing.baths} ba{" "}
                  {listing.lot_size && `| ${listing.lot_size}`}
                </h6>
              </div>
            </div>
            <span className="text-dark">
              <strong className="card-text">
                <FontAwesomeIcon className="fas" icon={faMapMarkerAlt} />{" "}
                <span>{listing.address_new.line},</span>{" "}
                <span>{listing.address_new.city},</span>{" "}
                <span>{listing.address_new.state_code}</span>{" "}
                <span>{listing.address_new.postal_code}</span>
              </strong>
            </span>
          </div>
          <div className="card-footer text-muted">
            {listing.prop_status === "for_sale" ? "For Sale" : "For Rent"}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
