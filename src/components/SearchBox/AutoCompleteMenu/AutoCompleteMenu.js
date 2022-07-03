import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropertiesDataContext from "../../../contexts/propertiesContext";

import useClickOutside from "../../../hooks/useClickOutside";
import "./AutoCompleteMenu.css";

const AutoCompleteMenu = () => {
  const {
    searchText,
    setShowAutoCMenu,
    fetchProperties,
    autocompResults,
    autocompleteLimit,
    selectedSort,
    saleRentRadio,
    // fetchAutoCompleteSearch
  } = useContext(PropertiesDataContext);
  const autoComArr = [
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
    {
      line: "3609 Florida Rd",
      city: "Baltimore",
      state_code: "MD",
      postal_code: "21244",
    },
  ];

  let domNode = useClickOutside(() => setShowAutoCMenu(false));

  return (
    <div ref={domNode} className="autocomplete-menu">
      <div className="menu-arrow"></div>
      {searchText &&
        autocompResults.slice(0, autocompleteLimit).map((obj, key) => (
          <Link
            key={key}
            onClick={(e) => {
              e.preventDefault();
              fetchProperties(
                obj.city,
                obj.state_code,
                selectedSort,
                saleRentRadio
              );
              // this'll be true since we're on it
              setShowAutoCMenu(false);
            }}
            to={"/listings"}
            className="autoComLink"
          >
            <b>
              {obj.line}
              {obj.line ? ", " : null}
              {obj.city}, {obj.state_code}
              {obj.postal_code ? ", " : null}
              {obj.postal_code}
            </b>
          </Link>
        ))}
    </div>
  );
};

export default AutoCompleteMenu;
