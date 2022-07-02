/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const CarouselContent = ({ selectedProp, current }) => {
  // todo: create the modal feature to show full screen on image (would need to change background color on full screen, also don't think I'd need a modal for that since the full screen itself takes up the whole screen, see uncle's project, would need an onClick or something to get out of full screen)
  // const handleClick
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
