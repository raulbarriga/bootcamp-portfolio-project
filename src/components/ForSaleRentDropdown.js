import React from "react";

const ForSaleRentDropdown = ({radioClicked, setRadioClicked}) => {
  
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
        {radioClicked === "For Sale" ? "For Sale" : "For Rent"}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <button className="btn dropdown-item">
            <input
              value={radioClicked}
              id="radioSale"
              name="radioClicked"
              type="radio"
              className="todos"
              onChange={() => setRadioClicked("For Sale") }
              checked={radioClicked === "For Sale" ? true : false}
            />{" "}
            <label htmlFor="radioSale">For Sale</label>
          </button>
        </li>
        <li>
          <button className="btn dropdown-item">
            <input
              value={radioClicked}
              id="radioRent"
              name="radioClicked"
              type="radio"
              className="todos"
              onChange={() => setRadioClicked("For Rent") }
              checked={radioClicked === "For Rent" ? true : false}
            />{" "}
            <label htmlFor="radioRent">For Rent</label>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ForSaleRentDropdown;
/*

<div className="dropdown">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
        id="dropdownMenuLink"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {radioClicked === "For Sale" ? "For Sale" : "For Rent"}
      </button>
      <div classNaxme="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          For Sale
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option1"
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          For Rent
        </label>
        </div>
        </div>
        */
{
  /* <div className="form-group">
          <div className="form-check"></div>
          <div className="form-check"></div>
        </div> */
}
