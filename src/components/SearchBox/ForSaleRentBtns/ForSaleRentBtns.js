import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import PropertiesDataContext from "../../../contexts/propertiesContext";

import "./ForSaleRentBtns.css";

const ForSaleRentDropdown = () => {
  const location = useLocation();
  const { setSaleRentRadio, saleRentRadio } = useContext(PropertiesDataContext);

  return (
    // from https://codepen.io/raulbarriga/pen/wvmBGBY?editors=1100
    <div
      id="radioBtns"
      className={`btn-group-container d-inline-flex p-3 ${
        location.pathname === "/listings" ? "listingsPage" : ""
      }`}
    >
      <div>
        <label
          className={`btn btn-primary form-check-label ${
            saleRentRadio === "For Sale" ? "active" : ""
          }`}
        >
          <input
            className="form-check-input"
            type="radio"
            id="radioSale"
            name="saleRentRadio"
            autoComplete="off"
            onChange={() => setSaleRentRadio("For Sale")}
            checked={saleRentRadio === "For Sale"}
          />
          For Sale
        </label>
        <label
          className={`btn btn-primary form-check-label ${
            saleRentRadio === "For Rent" ? "active" : ""
          }`}
        >
          <input
            className="form-check-input"
            type="radio"
            id="radioRent"
            name="saleRentRadio"
            autoComplete="off"
            checked={saleRentRadio === "For Rent"}
            onChange={() => setSaleRentRadio("For Rent")}
          />{" "}
          For Rent
        </label>
      </div>
    </div>
  );
};

export default ForSaleRentDropdown;
