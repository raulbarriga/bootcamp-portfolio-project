import React, { useContext } from "react";
//import * as theiaStickySidebar from "theia-sticky-sidebar";
import { Link } from "react-router-dom";

import Carousel from "./Carousel/Carousel";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

import PropertiesDataContext from "../contexts/propertiesContext";

const ListingDetails = () => {
  const { selectedProp } = useContext(PropertiesDataContext);

  console.log("selectedProp: ", selectedProp);

  const Slider = () => <Carousel selectedProp={selectedProp} />;
  // for Google Embed Maps API (replaces spaces with +)
  let replaced = selectedProp.address.line.replace(/ /g, "+");

  return (
    <>
      <div id="mainPropertyDetals" style={{ transform: "none" }}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-12 col-lg-12 col-xl-10">
              <div className="page-header bordered mb0">
                <div className="row">
                  <div className="col-md-8">
                    {" "}
                    <Link to={"/listings"} className="btn-return" title="Back">
                      <i className="fa fa-angle-left"></i>
                    </Link>
                    <h1>
                      {/* {selectedProp.raw_prop_type}{" "} */}
                      <span
                        className="label label-bordered"
                        style={{
                          transform: "capitalized",
                        }}
                      >
                        {selectedProp.prop_status === "for_sale"
                          ? "For Sale"
                          : "For Rent"}
                      </span>{" "}
                      <small>
                        <i className="fa fa-map-marker"></i>{" "}
                        {selectedProp.address.line}, {selectedProp.address.city}{" "}
                        {selectedProp.address.postal_code}
                      </small>
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <div className="price">
                      {/* $250,000 <small>$900/sq ft</small> */}$
                      {selectedProp &&
                        Boolean(selectedProp.price) &&
                        selectedProp.price.toLocaleString("en-US")}
                      {/* <small>${selectedProp.price.toLocaleString("en-US")}/sq ft</small> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content" className="item-single" style={{ transform: "none" }}>
          <div className="container" style={{ transform: "none" }}>
            <div
              className="row justify-content-md-center"
              style={{ transform: "none" }}
            >
              <div
                className="col col-md-12 col-lg-12 col-xl-10"
                style={{ transform: "none" }}
              >
                <div
                  className="row row justify-content-md-center has-sidebar"
                  style={{ transform: "none" }}
                >
                  <div
                    className="col-md-7 col-lg-8"
                    style={{
                      position: "relative",
                      overflow: "visible",
                      boxSizing: "borderBox",
                      minHeight: "1px",
                    }}
                  >
                    <div
                      className="theiaStickySidebar"
                      style={{
                        paddingTop: "0px",
                        paddingBottom: "1px",
                        position: "static",
                        transform: "none",
                      }}
                    >
                      <div>
                        {/* item-gallery goes here */}
                        {/* && thumbsSwiper */}
                        {/* && selectedProp.photos.length > 0 */}
                        {/*  */}
                        {selectedProp && <Slider />}
                        {/* Property Description */}
                        <div>
                          <ul
                            className="item-features d-flex justify-content-center"
                            style={{
                              padding: "20px",
                              margin: "0",
                              listStyle: "none",
                              marginBottom: "30px",
                              marginTop: "30px",
                              backgroundColor: "rgba(134, 158, 158, 0.1)",
                              borderRadius: "3px",
                            }}
                          >
                            {Boolean(selectedProp.sqft) && (
                              <li
                                style={{
                                  fontSize: "18px",
                                  color: "#888",
                                  display: "inline-block",
                                  marginRight: "44px",
                                  padding: "0",
                                  lineHeight: "30px",
                                }}
                              >
                                <span
                                  style={{
                                    color: "#333",
                                    fontWeight: "bold",
                                    display: "block",
                                    fontSize: "18px",
                                  }}
                                >
                                  {selectedProp.sqft.toLocaleString("en-US")}
                                </span>{" "}
                                sqft{" "}
                              </li>
                            )}

                            {selectedProp.lot_sqft !== null &&
                              selectedProp.lot_sqft !== 0 && (
                                <li
                                  style={{
                                    fontSize: "18px",
                                    color: "#888",
                                    display: "inline-block",
                                    marginRight: "44px",
                                    padding: "0",
                                    lineHeight: "30px",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#333",
                                      fontWeight: "bold",
                                      display: "block",
                                      fontSize: "18px",
                                    }}
                                  >
                                    {selectedProp.lot_sqft.toLocaleString(
                                      "en-US"
                                    )}
                                  </span>{" "}
                                  sqft lot{" "}
                                </li>
                              )}

                            {Boolean(selectedProp.garage) && (
                              <li
                                style={{
                                  fontSize: "18px",
                                  color: "#888",
                                  display: "inline-block",
                                  marginRight: "44px",
                                  padding: "0",
                                  lineHeight: "30px",
                                }}
                              >
                                <span
                                  style={{
                                    color: "#333",
                                    fontWeight: "bold",
                                    display: "block",
                                    fontSize: "18px",
                                  }}
                                >
                                  {selectedProp.garage}
                                </span>{" "}
                                Garage{" "}
                              </li>
                            )}
                            {Boolean(selectedProp.beds) &&
                              selectedProp.beds !== 0 && (
                                <li
                                  style={{
                                    fontSize: "18px",
                                    color: "#888",
                                    display: "inline-block",
                                    marginRight: "44px",
                                    padding: "0",
                                    lineHeight: "30px",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#333",
                                      fontWeight: "bold",
                                      display: "block",
                                      fontSize: "18px",
                                    }}
                                  >
                                    {selectedProp.beds}
                                  </span>{" "}
                                  Bedrooms{" "}
                                </li>
                              )}

                            {Boolean(selectedProp.baths) && (
                              <li
                                style={{
                                  fontSize: "18px",
                                  color: "#888",
                                  display: "inline-block",
                                  marginRight: "44px",
                                  padding: "0",
                                  lineHeight: "30px",
                                }}
                              >
                                <span
                                  style={{
                                    color: "#333",
                                    fontWeight: "bold",
                                    display: "block",
                                    fontSize: "18px",
                                  }}
                                >
                                  {selectedProp.baths}
                                </span>{" "}
                                Bathrooms{" "}
                              </li>
                            )}
                          </ul>
                          <div className="item-description">
                            <h3 className="headline">Property description</h3>
                            <p>{selectedProp.description}</p>
                            {Boolean(selectedProp.year_built) && (
                              <p>
                                <strong>Year Built: </strong>
                                &nbsp;
                                {selectedProp.year_built}
                              </p>
                            )}
                            {Boolean(selectedProp.hoa_fee) &&
                              selectedProp.hoa_fee !== 0 && (
                                <p>
                                  <strong>HOA fee: </strong>
                                  &nbsp; ${" "}
                                  {selectedProp.hoa_fee.toLocaleString("en-US")}
                                </p>
                              )}
                          </div>
                          <h3 className="headline">Property Features</h3>
                          {selectedProp &&
                            selectedProp.features.map((obj, index) => (
                              <ul className="list-group" key={index}>
                                <label
                                  htmlFor="listItemId"
                                  style={{
                                    paddingBottom: "4px",
                                    borderBottom: "1px solid #dcdcdc",
                                  }}
                                >
                                  {obj.category}
                                </label>
                                <div
                                  style={{
                                    columns: `${
                                      obj.text.length % 4 === 0 ||
                                      obj.text.length % 5 === 0
                                        ? "2 auto"
                                        : "auto"
                                    }`,
                                  }}
                                >
                                  {obj.text.map((el, nestedIndex) => (
                                    <li
                                      id="listItemId"
                                      className="list-group-item p-0 border-0 ml-3"
                                      style={{ display: "revert" }}
                                      key={nestedIndex}
                                    >
                                      {el}
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            ))}

                          {/* Google Maps */}
                          <div className="item-navigation">
                            <ul className="nav nav-tabs v2" role="tablist">
                              <li role="presentation">
                                <a
                                  href="#map"
                                  aria-controls="map"
                                  role="tab"
                                  data-toggle="tab"
                                  className="active"
                                >
                                  <i className="fa fa-map"></i>{" "}
                                  <span className="hidden-xs">
                                    Map &amp; nearby
                                  </span>
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#streetview"
                                  aria-controls="streetview"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  <i className="fa fa-road"></i>{" "}
                                  <span className="hidden-xs">Street View</span>
                                </a>
                              </li>
                            </ul>
                            <div className="tab-content">
                              <div
                                role="tabpanel"
                                className="tab-pane active"
                                id="map"
                              >
                                <iframe
                                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${replaced},${selectedProp.address.city}+${selectedProp.address.state_code}`}
                                  width="600"
                                  height="450"
                                  style={{
                                    border: "0",
                                  }}
                                  allowFullScreen=""
                                  title="1"
                                ></iframe>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="streetview"
                              >
                                <iframe
                                  src={`https://www.google.com/maps/embed/v1/streetview?key=${
                                    process.env.REACT_APP_GOOGLE_MAPS_API_KEY
                                  }&location=${
                                    selectedProp.address.lat +
                                    ", " +
                                    selectedProp.address.long
                                  }`}
                                  width="600"
                                  height="450"
                                  style={{
                                    border: "0",
                                  }}
                                  allowFullScreen=""
                                  title="2"
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* sidebar goes here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll to top component goes here */}
      <ScrollToTop />
      {/* PhotoSwipe (the last stuff goes here) */}
    </>
  );
};

export default ListingDetails;
