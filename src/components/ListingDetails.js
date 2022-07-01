import React, { useContext } from "react";
//import * as theiaStickySidebar from "theia-sticky-sidebar";
import { Link } from "react-router-dom";

import Carousel from "./Carousel/Carousel";
import PropertiesDataContext from "../contexts/propertiesData";

const ListingDetails = () => {
  const { selectedProp } = useContext(PropertiesDataContext);

  console.log("selectedProp: ", selectedProp);

  const Slider = () => <Carousel selectedProp={selectedProp} />;

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
                        selectedProp.price &&
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
                            {selectedProp.sqft && (
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
                                  {selectedProp &&
                                    selectedProp.sqft &&
                                    selectedProp.sqft.toLocaleString("en-US")}
                                </span>{" "}
                                sqft{" "}
                              </li>
                            )}

                            {selectedProp.lot_sqft !== 0 && (
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
                                  {selectedProp &&
                                    selectedProp.lot_sqft &&
                                    selectedProp.lot_sqft.toLocaleString(
                                      "en-US"
                                    )}
                                </span>{" "}
                                sqft lot{" "}
                              </li>
                            )}

                            {selectedProp.garage && (
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
                            {selectedProp.beds && (
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

                            {selectedProp.baths && (
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
                            {selectedProp.year_built && (
                              <p>
                                <strong>Year Built: </strong>
                                &nbsp;
                                {selectedProp.year_built}
                              </p>
                            )}
                            {selectedProp.hoa_fee &&
                              selectedProp.hoa_fee !== 0 && (
                                <p>
                                  <strong>HOA fee: </strong>
                                  &nbsp; ${" "}
                                  {selectedProp &&
                                    selectedProp.hoa_fee &&
                                    selectedProp.hoa_fee.toLocaleString(
                                      "en-US"
                                    )}
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

                          <div className="item-navigation">
                            <ul className="nav nav-tabs v2" role="tablist">
                              <li role="presentation">
                                <a
                                  href="/map"
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
                                  href="/streetview"
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
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.7401235613713!2d1.4497354260471211!3d52.45232942952154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9f169c5a088db%3A0x75a6abde48cc5adc!2sKents+Ln%2C+Bungay+NR35+1JF%2C+UK!5e0!3m2!1sen!2sin!4v1489862715790"
                                  width="600"
                                  height="450"
                                  style={{
                                    border: "0",
                                  }}
                                  allowFullScreen=""
                                ></iframe>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="streetview"
                              >
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1489861898447!6m8!1m7!1sGz9bS-GXSJE28jHD19m7KQ!2m2!1d52.45191646727986!2d1.451480542718656!3f0!4f0!5f0.8160813932612223"
                                  width="600"
                                  height="450"
                                  style={{
                                    border: "0",
                                  }}
                                  allowFullScreen=""
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
      <button
        className="btn btn-primary btn-circle"
        id="to-top"
        style={{ visibility: "visible", opacity: "1" }}
      >
        <i className="fa fa-angle-up"></i>
      </button>

      {/* PhotoSwipe (the last stuff goes here) */}
    </>
  );
};

export default ListingDetails;
