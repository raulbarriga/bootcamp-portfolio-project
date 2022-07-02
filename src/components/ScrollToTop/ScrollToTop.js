import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary btn-circle"
          id="to-top"
          style={{ visibility: "visible", opacity: "1" }}
        >
          <i className="fa fa-angle-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
