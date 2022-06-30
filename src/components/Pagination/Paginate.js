import React, { useContext, useEffect } from "react";
import Pagination from "react-responsive-pagination";

import PropertiesDataContext from "../../contexts/propertiesData";

import "./Pagination.css";

const Paginate = () => {
  const { dataLength, currentPage, paginate, propertiesPerPage } = useContext(
    PropertiesDataContext
  );
  let pageNumbers = [];
  let totalPages = Math.ceil(dataLength / propertiesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    // this'll give the correct amount of page #'s
    pageNumbers.push(i);
  }

  //scroll to top on pagination change
  useEffect(() => {
    // idea from https://v5.reactrouter.com/web/guides/scroll-restoration/scroll-to-top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <nav id="pagination">
      <ul className="pagination justify-content-center">
        <Pagination
          pageLinkClassName="page-link"
          current={currentPage}
          total={pageNumbers.length}
          onPageChange={(pageNumber) => paginate(pageNumber)}
        />
      </ul>
    </nav>
  );
};

export default Paginate;

/*
{pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item
            ${currentPage === pageNumber ? "active" : ""}`}
          >
            <button onClick={() => paginate(pageNumber)} className="page-link">
              {pageNumber}
            </button>
          </li>
        ))}

*/
