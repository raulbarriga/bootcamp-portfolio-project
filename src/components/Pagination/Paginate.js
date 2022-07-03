import React, { useContext, useEffect } from "react";
import Pagination from "react-responsive-pagination";

import PaginationContext from "../../contexts/paginateContext";
import PropertiesDataContext from "../../contexts/propertiesContext";

import "./Pagination.css";

const Paginate = () => {
  const { paginate, pageNumbers } = useContext(PaginationContext);
  const { currentPage } = useContext(PropertiesDataContext);

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
