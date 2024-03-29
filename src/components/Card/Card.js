import React from "react";
import { Link } from "react-router-dom";
import {
  faBed,
  faToilet,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.css";

const Card = ({ listing, handleClick }) => {
  return (
    <>
      <div id="card" className="card" onClick={handleClick}>
        <Link
          // Link doesn't need the colons on the path (just the Routes & the backend endpoints), you still need the forward slashes here though
          to={
            listing.listing_id && listing.property_id
              ? `${listing.listing_id}/${listing.property_id}/${listing.prop_status}`
              : `${listing.plan_id}`
          }
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
