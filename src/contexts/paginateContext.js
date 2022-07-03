import React, { createContext, useContext, useState } from "react";
import PropertiesDataContext from "./propertiesContext";

const PaginationContext = createContext({});

export const PaginationProvider = ({ children }) => {
  const [propertiesPerPage, setPropertiesPerPage] = useState(12);

  const { listingsData, dataLength, currentPage, setCurrentPage } = useContext(
    PropertiesDataContext
  );

  let pageNumbers = [];
  let totalPages = Math.ceil(dataLength / propertiesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    // this'll give the correct amount of page #'s
    pageNumbers.push(i);
  }

  // get current properties
  // these are the actual properties that are shown (done like this for pagination)
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = listingsData.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PaginationContext.Provider
      value={{ paginate, pageNumbers, currentProperties }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
