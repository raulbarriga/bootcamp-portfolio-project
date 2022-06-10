import React from "react";

const Pagination = ({
  propertiesPerPage,
  dataLength,
  currentPage,
  paginate,
}) => {
  let pageNumbers = [];
  let totalPages = Math.ceil(dataLength / propertiesPerPage);
  console.log("total pages: ", totalPages);

  for (let i = 1; i <= totalPages; i++) {
    // this'll give the correct amount of page #'s
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item
            ${currentPage === pageNumber ? "active" : ""}`}
          >
            <button
              onClick={() => paginate(pageNumber)}
              className="page-link"
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
