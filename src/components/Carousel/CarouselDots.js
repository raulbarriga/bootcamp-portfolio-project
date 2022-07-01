import React from "react";

const CarouselDots = ({ selectedProp, current, handleClick }) => {
  return (
    <ol className="carousel-indicators">
      {selectedProp.photos.map((obj, index) => (
        <li
          key={index}
          className={`carousel-dot ${index === current ? "active" : ""}`}
          onClick={() => handleClick(index)}
        ></li>
      ))}
    </ol>
  );
};

export default CarouselDots;
