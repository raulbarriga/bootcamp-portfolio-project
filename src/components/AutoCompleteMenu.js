import React from "react";
import useClickOutside from "../hooks/useClickOutside";
import {Link, useLocation} from 'react-router-dom'

const AutoCompleteMenu = ({ autocompResults, autocompleteLimit, searchText, fetchForSale,setShowAutoCMenu, history
}) => {
  const location = useLocation();
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

  let domNode = useClickOutside(() => setShowAutoCMenu(false))

  return (
    <div ref={domNode} className="autocomplete-menu">
      <div className="menu-arrow"></div>
      {searchText && autocompResults.slice(0, autocompleteLimit).map((obj, key) => (
        <Link key={key} onClick={(e) => {
          e.preventDefault();
          fetchForSale(obj.city, obj.state_code)
          // this'll be true since we're on it
            setShowAutoCMenu(false);
          }} 
          // to={`${location.pathname !== "/bootcamp-portfolio-project/listings" ? "/bootcamp-portfolio-project/listings" : null}`
          to={"/bootcamp-portfolio-project/listings"}
          className="autoComLink"
          >
          <b>
            {obj.line}{obj.line ? ", ": null}{obj.city}, {obj.state_code}{obj.postal_code ? ", " : null }{obj.postal_code}
          </b>
        </Link>
      ))}
    </div>
  );
};

export default AutoCompleteMenu;
