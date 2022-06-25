import React, { useContext } from "react";
import PropertiesDataContext from "../../../contexts/propertiesData";

import "./ForSaleRentDropdown.css";

const ForSaleRentDropdown = () => {
  const { setSaleRentRadio, saleRentRadio } = useContext(PropertiesDataContext);

  return (
    // inspired from https://stackoverflow.com/questions/34666973/radio-button-inside-dropdown-bootstrap
    <div id="radioDropdown" className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {saleRentRadio === "For Sale" ? "For Sale" : "For Rent"}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <button className="btn dropdown-item">
            <input
              value={saleRentRadio}
              id="radioSale"
              name="saleRentRadio"
              type="radio"
              onChange={() => setSaleRentRadio("For Sale")}
              checked={saleRentRadio === "For Sale" ? true : false}
            />{" "}
            <label htmlFor="radioSale">For Sale</label>
          </button>
        </li>
        <li>
          <button className="btn dropdown-item">
            <input
              value={saleRentRadio}
              id="radioRent"
              name="saleRentRadio"
              type="radio"
              onChange={() => setSaleRentRadio("For Rent")}
              checked={saleRentRadio === "For Rent" ? true : false}
            />{" "}
            <label htmlFor="radioRent">For Rent</label>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ForSaleRentDropdown;
