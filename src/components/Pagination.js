import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  propertiesPerPage,
  dataLength,
  currentPage,
  paginate,
  topOfCardsRef
}) => {
  let pageNumbers = [];
  let totalPages = Math.ceil(dataLength / propertiesPerPage);
  console.log("total pages: ", totalPages);

  for (let i = 1; i <= totalPages; i++) {
    // this'll give the correct amount of page #'s
    pageNumbers.push(i);
  }

  const handleScroll = (ref, e) => {
    // scroll to an element guide:
    // https://lo-victoria.com/a-look-at-react-hooks-useref-to-scroll-to-an-element#heading-step-4-add-useref-in-app
    e.preventDefault();
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item
            ${currentPage === pageNumber ? "active" : ""}`}
          >
            <Link
              to={"/#App"}
              onClick={(e) => {
                handleScroll(topOfCardsRef.current, e);
                paginate(pageNumber);
              }}
              className="page-link"
            >
              {pageNumber}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
