/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const CarouselContent = ({ selectedProp, current }) => {
  return (
    <div className="carousel-inner">
      {selectedProp.photos.map((obj, index) => (
        <div
          key={index}
          className={`carousel-item ${index === current ? "active" : ""}`}
        >
          <img
            src={obj.href}
            className="d-block w-100"
            alt={`image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselContent;
