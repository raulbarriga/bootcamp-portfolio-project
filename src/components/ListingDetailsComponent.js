import React, { Component } from "react";
import $ from "jquery";
// Core JS file
import * as PhotoSwipe from "photoswipe";
// UI JS file
import * as PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import "swiper/dist/css/swiper.min.css";
//import * as theiaStickySidebar from "theia-sticky-sidebar";
import Swiper from "swiper";

const PropertyDetals = ({ match }) => {
    console.log(match);
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
                                        <a
                                            href="#"
                                            className="btn-return"
                                            title="Back">
                                            <i className="fa fa-angle-left"></i>
                                        </a>
                                        <h1>
                                            2 bed semi-detached bungalow{" "}
                                            <span
                                                className="label label-bordered"
                                                style={{
                                                    transform: "capitalized",
                                                }}>
                                                For sale
                                            </span>{" "}
                                            <small>
                                                <i className="fa fa-map-marker"></i>{" "}
                                                Kirkstone Road, Middlesbrough
                                                TS3
                                            </small>
                                        </h1>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="price">
                                            $250,000 <small>$900/sq ft</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="content"
                    className="item-single"
                    style={{ transform: "none" }}>
                    <div className="container" style={{ transform: "none" }}>
                        <div
                            className="row justify-content-md-center"
                            style={{ transform: "none" }}>
                            <div
                                className="col col-md-12 col-lg-12 col-xl-10"
                                style={{ transform: "none" }}>
                                <div
                                    className="row row justify-content-md-center has-sidebar"
                                    style={{ transform: "none" }}>
                                    <div
                                        className="col-md-7 col-lg-8"
                                        style={{
                                            position: "relative",
                                            overflow: "visible",
                                            boxSizing: "borderBox",
                                            minHeight: "1px",
                                        }}>
                                        <div
                                            className="theiaStickySidebar"
                                            style={{
                                                paddingTop: "0px",
                                                paddingBottom: "1px",
                                                position: "static",
                                                transform: "none",
                                            }}>
                                            <div>
                                                <div className="item-gallery">
                                                    {/* Carousel */}
                                                    <div
                                                        className="swiper-container gallery-top swiper-container-horizontal"
                                                        data-pswp-uid="1">
                                                        <div
                                                            className="swiper-wrapper lazyload"
                                                            style={{
                                                                transitionDuration:
                                                                    "0ms",
                                                                transform:
                                                                    "translate3d(0px, 0px, 0px)",
                                                            }}>
                                                            <div
                                                                className="swiper-slide swiper-slide-active"
                                                                style={{
                                                                    width:
                                                                        "510px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <figure
                                                                    itemProp="associatedMedia"
                                                                    itemScope=""
                                                                    itemType="http://schema.org/ImageObject">
                                                                    <a
                                                                        href="http://uilove.in/realestate/listo/preview/img/demo/property/1.jpg"
                                                                        itemProp="contentUrl"
                                                                        data-size="2000x1414">
                                                                        <img
                                                                            src="http://uilove.in/realestate/listo/preview/img/demo/property/1.jpg"
                                                                            className="img-fluid swiper-lazy swiper-lazy-loaded"
                                                                            alt="Drawing Room"
                                                                        />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div
                                                                className="swiper-slide swiper-slide-next"
                                                                style={{
                                                                    width:
                                                                        "510px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <figure
                                                                    itemProp="associatedMedia"
                                                                    itemScope=""
                                                                    itemType="http://schema.org/ImageObject">
                                                                    <a
                                                                        href="http://uilove.in/realestate/listo/preview/img/demo/property/2.jpg"
                                                                        itemProp="contentUrl"
                                                                        data-size="2000x1414">
                                                                        <img
                                                                            src="http://uilove.in/realestate/listo/preview/img/demo/property/2.jpg"
                                                                            className="img-fluid swiper-lazy swiper-lazy-loaded"
                                                                            alt="Drawing Room"
                                                                        />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "510px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <figure
                                                                    itemProp="associatedMedia"
                                                                    itemScope=""
                                                                    itemType="http://schema.org/ImageObject">
                                                                    <a
                                                                        href="/"
                                                                        itemProp="contentUrl"
                                                                        data-size="2000x1414">
                                                                        <img
                                                                            data-src="/"
                                                                            src="/"
                                                                            className="img-fluid swiper-lazy"
                                                                            alt="Drawing Room"
                                                                        />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "510px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <figure
                                                                    itemProp="associatedMedia"
                                                                    itemScope=""
                                                                    itemType="http://schema.org/ImageObject">
                                                                    <a
                                                                        href="http://uilove.in/realestate/listo/preview/img/demo/property/4.jpg"
                                                                        itemProp="contentUrl"
                                                                        data-size="2000x1414">
                                                                        <img
                                                                            data-src="http://uilove.in/realestate/listo/preview/img/demo/property/4.jpg"
                                                                            src="http://uilove.in/realestate/listo/preview/img/demo/property/4.jpg"
                                                                            className="img-fluid swiper-lazy"
                                                                            alt="Drawing Room"
                                                                        />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "510px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <figure
                                                                    itemProp="associatedMedia"
                                                                    itemScope=""
                                                                    itemType="http://schema.org/ImageObject">
                                                                    <a
                                                                        href="http://uilove.in/realestate/listo/preview/img/demo/property/5.jpg"
                                                                        itemProp="contentUrl"
                                                                        data-size="2000x1414">
                                                                        <img
                                                                            data-src="http://uilove.in/realestate/listo/preview/img/demo/property/5.jpg"
                                                                            src="http://uilove.in/realestate/listo/preview/img/demo/property/5.jpg"
                                                                            className="img-fluid swiper-lazy"
                                                                            alt="Drawing Room"
                                                                        />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-button-next"></div>
                                                        <div className="swiper-button-prev swiper-button-disabled"></div>
                                                    </div>
                                                    {/* Gallery below the carousel */}
                                                    <div className="swiper-container gallery-thumbs swiper-container-horizontal">
                                                        <div
                                                            className="swiper-wrapper"
                                                            style={{
                                                                transitionDuration:
                                                                    "0ms",
                                                                transform:
                                                                    "translate3d(208px, 0px, 0px)",
                                                            }}>
                                                            <div
                                                                className="swiper-slide swiper-slide-active"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide swiper-slide-next"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className="swiper-slide"
                                                                style={{
                                                                    width:
                                                                        "94px",
                                                                    marginRight:
                                                                        "10px",
                                                                }}>
                                                                <img
                                                                    src="https://ewscripps.brightspotcdn.com/dims4/default/f5211b0/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F12%2F14%2F1155%20Canyon%20Boulevard%20406-print-004-111-Living%20Room-4200x2800-300dpi_1513279944338.jpg_74287286_ver1.0_640_480.jpg"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <ul
                                                        className="item-features"
                                                        style={{
                                                            padding: "20px",
                                                            margin: "0",
                                                            listStyle: "none",
                                                            marginBottom:
                                                                "30px",
                                                            backgroundColor:
                                                                "rgba(134, 158, 158, 0.1)",
                                                            borderRadius: "3px",
                                                        }}>
                                                        <li
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                color: "#888",
                                                                display:
                                                                    "inline-block",
                                                                marginRight:
                                                                    "44px",
                                                                padding: "0",
                                                                lineHeight:
                                                                    "30px",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#333",
                                                                    fontWeight:
                                                                        "bold",
                                                                    display:
                                                                        "block",
                                                                    fontSize:
                                                                        "18px",
                                                                }}>
                                                                540
                                                            </span>{" "}
                                                            sq m{" "}
                                                        </li>
                                                        <li
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                color: "#888",
                                                                display:
                                                                    "inline-block",
                                                                marginRight:
                                                                    "44px",
                                                                padding: "0",
                                                                lineHeight:
                                                                    "30px",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#333",
                                                                    fontWeight:
                                                                        "bold",
                                                                    display:
                                                                        "block",
                                                                    fontSize:
                                                                        "18px",
                                                                }}>
                                                                3
                                                            </span>{" "}
                                                            Rooms{" "}
                                                        </li>
                                                        <li
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                color: "#888",
                                                                display:
                                                                    "inline-block",
                                                                marginRight:
                                                                    "44px",
                                                                padding: "0",
                                                                lineHeight:
                                                                    "30px",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#333",
                                                                    fontWeight:
                                                                        "bold",
                                                                    display:
                                                                        "block",
                                                                    fontSize:
                                                                        "18px",
                                                                }}>
                                                                1
                                                            </span>{" "}
                                                            Bedrooms{" "}
                                                        </li>
                                                        <li
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                color: "#888",
                                                                display:
                                                                    "inline-block",
                                                                marginRight:
                                                                    "44px",
                                                                padding: "0",
                                                                lineHeight:
                                                                    "30px",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#333",
                                                                    fontWeight:
                                                                        "bold",
                                                                    display:
                                                                        "block",
                                                                    fontSize:
                                                                        "18px",
                                                                }}>
                                                                2
                                                            </span>{" "}
                                                            Bathrooms{" "}
                                                        </li>
                                                    </ul>
                                                    <div className="item-description">
                                                        <h3 className="headline">
                                                            Property description
                                                        </h3>
                                                        <p>
                                                            <strong>
                                                                Hall
                                                            </strong>
                                                            &nbsp;
                                                            <strong>
                                                                entrance
                                                            </strong>
                                                            &nbsp;UPVC double
                                                            glazed door to the
                                                            front, laminate
                                                            flooring, storage
                                                            cupboard, loft
                                                            access and under
                                                            floor heating.
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Lounge/diner/kitchen
                                                            </strong>
                                                            &nbsp;
                                                            <strong>
                                                                24' 6" x 16' 0"
                                                                (7.47m x 4.88m)
                                                            </strong>
                                                            &nbsp;Spacious L
                                                            shape open plan
                                                            living, UPVC double
                                                            glazed window and
                                                            bi-folding doors to
                                                            the rear, laminate
                                                            flooring, television
                                                            and telephone
                                                            connection points,
                                                            power sockets and
                                                            under floor heating.
                                                        </p>
                                                        <p>
                                                            Fitted kitchen with
                                                            wall and base
                                                            cupboards,
                                                            integrated Bosch
                                                            electric hob and
                                                            oven, cooker hood,
                                                            lamona inset sink
                                                            and drainer, mosaic
                                                            style splash back
                                                            tiling, integrated
                                                            Bosch washing
                                                            machine and
                                                            dishwasher,
                                                            integrated Bosch
                                                            fridge freezer and
                                                            power sockets.
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Bedroom
                                                            </strong>
                                                            &nbsp;
                                                            <strong>one</strong>
                                                            &nbsp;
                                                            <strong>
                                                                10' 08" x 10'
                                                                04" (3.25m x
                                                                3.15m)
                                                            </strong>
                                                            &nbsp;UPVC double
                                                            glazed window to the
                                                            front, television
                                                            connection point,
                                                            power sockets and
                                                            under floor heating.
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Bedroom
                                                            </strong>
                                                            &nbsp;
                                                            <strong>two</strong>
                                                            &nbsp;
                                                            <strong>
                                                                9' 05" x 9' 0"
                                                                (2.87m x 2.74m)
                                                            </strong>
                                                            &nbsp;UPVC double
                                                            glazed window to the
                                                            front, television
                                                            connection point,
                                                            power sockets and
                                                            under floor heating.
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Bathroom
                                                            </strong>
                                                            &nbsp;
                                                            <strong>
                                                                8' 08" x 6' 08"
                                                                (2.64m x 2.03m)
                                                            </strong>
                                                            &nbsp;UPVC double
                                                            glazed window to the
                                                            side, tiled
                                                            flooring, L shaped
                                                            bath with fitted
                                                            shower over head,
                                                            wash hand basin, WC,
                                                            extractor fan, tiled
                                                            surrounds and under
                                                            floor heating.
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Outside
                                                            </strong>
                                                            &nbsp;
                                                            <strong>
                                                                areas
                                                            </strong>
                                                            &nbsp;Front - large
                                                            driveway with space
                                                            for multiple
                                                            vehicles.
                                                        </p>
                                                        <p>
                                                            Rear - Large fully
                                                            enclosed garden laid
                                                            to lawn with patio
                                                            around the property
                                                            and side access.
                                                        </p>
                                                    </div>
                                                    <h3 className="headline">
                                                        Property Details
                                                    </h3>
                                                    <ul className="checked_list feature-list">
                                                        <li>
                                                            <strong>
                                                                Building Age:
                                                            </strong>{" "}
                                                            2 Years
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                Parking:
                                                            </strong>{" "}
                                                            Attached Garage
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                Cooling:
                                                            </strong>{" "}
                                                            Central Cooling
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                Heating:
                                                            </strong>{" "}
                                                            Forced Air, Gas
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                Sewer:
                                                            </strong>{" "}
                                                            Public/City
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                Water:
                                                            </strong>{" "}
                                                            City
                                                        </li>
                                                    </ul>
                                                    <h3 className="headline">
                                                        Property Features
                                                    </h3>
                                                    <ul className="checked_list feature-list">
                                                        <li>Alarm</li>
                                                        <li>Gym</li>
                                                        <li>Internet</li>
                                                        <li>Swimming Pool</li>
                                                        <li>Window Covering</li>
                                                    </ul>
                                                    <div className="item-navigation">
                                                        <ul
                                                            className="nav nav-tabs v2"
                                                            role="tablist">
                                                            <li role="presentation">
                                                                <a
                                                                    href="#map"
                                                                    aria-controls="map"
                                                                    role="tab"
                                                                    data-toggle="tab"
                                                                    className="active">
                                                                    <i className="fa fa-map"></i>{" "}
                                                                    <span className="hidden-xs">
                                                                        Map
                                                                        &amp;
                                                                        nearby
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a
                                                                    href="#streetview"
                                                                    aria-controls="streetview"
                                                                    role="tab"
                                                                    data-toggle="tab">
                                                                    <i className="fa fa-road"></i>{" "}
                                                                    <span className="hidden-xs">
                                                                        Street
                                                                        View
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content">
                                                            <div
                                                                role="tabpanel"
                                                                className="tab-pane active"
                                                                id="map">
                                                                <iframe
                                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.7401235613713!2d1.4497354260471211!3d52.45232942952154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9f169c5a088db%3A0x75a6abde48cc5adc!2sKents+Ln%2C+Bungay+NR35+1JF%2C+UK!5e0!3m2!1sen!2sin!4v1489862715790"
                                                                    width="600"
                                                                    height="450"
                                                                    style={{
                                                                        border:
                                                                            "0",
                                                                    }}
                                                                    allowFullScreen=""></iframe>
                                                            </div>
                                                            <div
                                                                role="tabpanel"
                                                                className="tab-pane"
                                                                id="streetview">
                                                                <iframe
                                                                    src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1489861898447!6m8!1m7!1sGz9bS-GXSJE28jHD19m7KQ!2m2!1d52.45191646727986!2d1.451480542718656!3f0!4f0!5f0.8160813932612223"
                                                                    width="600"
                                                                    height="450"
                                                                    style={{
                                                                        border:
                                                                            "0",
                                                                    }}
                                                                    allowFullScreen=""></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-5 col-lg-4"
                                        style={{
                                            position: "relative",
                                            overflow: "visible",
                                            boxSizing: "borderBox",
                                            minHeight: "1px",
                                        }}>
                                        <div
                                            className="theiaStickySidebar"
                                            style={{
                                                paddingTop: "0px",
                                                paddingBottom: "1px",
                                                position: "static",
                                                transform: "none",
                                                top: "0px",
                                                left: "932.925px",
                                            }}>
                                            <div
                                                id="sidebar"
                                                className="sidebar-right">
                                                <div className="sidebar_inner">
                                                    <div
                                                        id="feature-list"
                                                        role="tablist">
                                                        <div className="card">
                                                            <div
                                                                className="card-header"
                                                                role="tab"
                                                                id="headingOne">
                                                                <h4 className="panel-title">
                                                                    {" "}
                                                                    <a
                                                                        role="button"
                                                                        data-toggle="collapse"
                                                                        href="#specification"
                                                                        aria-expanded="true"
                                                                        aria-controls="specification"
                                                                        className="">
                                                                        {" "}
                                                                        Specifications
                                                                        <i className="fa fa-caret-down float-right"></i>{" "}
                                                                    </a>{" "}
                                                                </h4>
                                                            </div>
                                                            <div
                                                                id="specification"
                                                                className="panel-collapse collapse show"
                                                                role="tabpanel">
                                                                <div className="card-body">
                                                                    <table className="table v1">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    Bedrooms
                                                                                </td>
                                                                                <td>
                                                                                    3
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    Bathrooms
                                                                                </td>
                                                                                <td>
                                                                                    2
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    Covered
                                                                                    area
                                                                                </td>
                                                                                <td>
                                                                                    4590
                                                                                    sqft
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    Total
                                                                                    Area
                                                                                </td>
                                                                                <td>
                                                                                    5600
                                                                                    sqft
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    Floor
                                                                                </td>
                                                                                <td>
                                                                                    Ground
                                                                                    Floor
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card shadow">
                                                        <h5 className="subheadline mt-0  mb-0">
                                                            For Sale by Agent
                                                        </h5>
                                                        <div className="media">
                                                            <div className="media-left">
                                                                {" "}
                                                                <a href="#">
                                                                    <img
                                                                        className="media-object rounded-circle"
                                                                        src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg"
                                                                        width="64"
                                                                        height="64"
                                                                        alt=""
                                                                    />{" "}
                                                                </a>{" "}
                                                            </div>
                                                            <div className="media-body">
                                                                <h4 className="media-heading">
                                                                    <a href="#">
                                                                        John Doe
                                                                    </a>
                                                                </h4>
                                                                <p>
                                                                    <a href="tel:01502392905">
                                                                        <i
                                                                            className="fa fa-phone"
                                                                            aria-hidden="true"></i>{" "}
                                                                        Call:
                                                                        01502
                                                                        392905
                                                                    </a>
                                                                </p>
                                                                <p>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-sm btn-light">
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            className="btn btn-lg btn-primary btn-block"
                                                            data-toggle="modal"
                                                            data-target="#leadform">
                                                            Request Details
                                                        </a>{" "}
                                                    </div>
                                                    <div
                                                        className="btn-group btn-group-justified"
                                                        role="group">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            className="btn btn-light"
                                                            data-toggle="tooltip"
                                                            title=""
                                                            data-original-title="Save to favorites">
                                                            <i
                                                                className="fa fa-star"
                                                                aria-hidden="true"></i>
                                                        </a>{" "}
                                                        <a
                                                            href="#"
                                                            className="btn btn-light"
                                                            data-toggle="tooltip"
                                                            title=""
                                                            data-original-title="Print this page">
                                                            <i
                                                                className="fa fa-print"
                                                                aria-hidden="true"></i>
                                                        </a>{" "}
                                                        <a
                                                            href="#"
                                                            className="btn btn-light"
                                                            data-toggle="modal"
                                                            data-target="#email-to-friend">
                                                            <span
                                                                data-toggle="tooltip"
                                                                title=""
                                                                data-original-title="Email to Friend">
                                                                <i
                                                                    className="fa fa-envelope-o"
                                                                    aria-hidden="true"></i>
                                                            </span>
                                                        </a>{" "}
                                                        <a
                                                            href="#"
                                                            className="btn btn-light"
                                                            data-toggle="modal"
                                                            data-target="#report-listing">
                                                            <span
                                                                data-toggle="tooltip"
                                                                title=""
                                                                data-original-title="Report Listing">
                                                                <i
                                                                    className="fa fa-exclamation-circle"
                                                                    aria-hidden="true"></i>
                                                            </span>
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="resize-sensor"
                                                style={{
                                                    position: "absolute",
                                                    left: "0px",
                                                    top: "0px",
                                                    right: "0px",
                                                    bottom: "0px",
                                                    overflow: "hidden",
                                                    zIndex: "-1",
                                                    visibility: "hidden",
                                                }}>
                                                <div
                                                    className="resize-sensor-expand"
                                                    style={{
                                                        position: "absolute",
                                                        left: "0",
                                                        top: "0",
                                                        right: "0",
                                                        bottom: "0",
                                                        overflow: "hidden",
                                                        zIndex: "-1",
                                                        visibility: "hidden",
                                                    }}>
                                                    <div
                                                        style={{
                                                            position:
                                                                "absolute",
                                                            left: "0px",
                                                            top: "0px",
                                                            transition:
                                                                "all 0s ease 0s",
                                                            width: "550px",
                                                            height: "708px",
                                                        }}></div>
                                                </div>
                                                <div
                                                    className="resize-sensor-shrink"
                                                    style={{
                                                        position: "absolute",
                                                        left: "0",
                                                        top: "0",
                                                        right: "0",
                                                        bottom: "0",
                                                        overflow: "hidden",
                                                        zIndex: "-1",
                                                        visibility: "hidden",
                                                    }}>
                                                    <div
                                                        style={{
                                                            position:
                                                                "absolute",
                                                            left: "0",
                                                            top: "0",
                                                            transition: "0s",
                                                            width: "200%",
                                                            height: "200%",
                                                        }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="btn btn-primary btn-circle"
                id="to-top"
                style={{ visibility: "visible", opacity: "1" }}>
                <i className="fa fa-angle-up"></i>
            </button>

            {/* Root element of PhotoSwipe. Must have class pswp.  */}
            <div
                className="pswp"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true">
                {/* Background of PhotoSwipe. 
                It's a separate element, as animating opacity is faster than rgba(). */}
                <div className="pswp__bg"></div>

                {/* Slides wrapper with overflow:hidden. */}
                <div className="pswp__scroll-wrap">
                    {/* Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory.
                    don't modify these 3 pswp__item elements, data is added later on. */}
                    <div
                        className="pswp__container"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                        <div
                            className="pswp__item"
                            style={{
                                display: "block",
                                transform: "translate3d(-1001px, 0px, 0px)",
                            }}>
                            <div
                                className="pswp__zoom-wrap"
                                style={{
                                    transform:
                                        "translate3d(0px, 35px, 0px) scale(1)",
                                }}>
                                <img
                                    className="pswp__img"
                                    src="/"
                                    style={{
                                        opacity: "1",
                                        width: "894px",
                                        height: "632px",
                                    }}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="pswp__item"
                            style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                            <div
                                className="pswp__zoom-wrap"
                                style={{
                                    transform:
                                        "translate3d(101.8px, 304.2px, 0px) scale(0.436242)",
                                }}>
                                <img
                                    className="pswp__img pswp__img--placeholder"
                                    src="img/demo/property/4.jpg"
                                    style={{
                                        width: "894px",
                                        height: "632px",
                                        display: "none",
                                    }}
                                />
                                <img
                                    className="pswp__img"
                                    src="img/demo/property/4.jpg"
                                    style={{
                                        display: "block",
                                        width: "894px",
                                        height: "632px",
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="pswp__item"
                            style={{
                                display: "block",
                                transform: "translate3d(1001px, 0px, 0px)",
                            }}>
                            <div
                                className="pswp__zoom-wrap"
                                style={{
                                    transform:
                                        "translate3d(0px, 35px, 0px) scale(1)",
                                }}>
                                <img
                                    className="pswp__img"
                                    src="img/demo/property/5.jpg"
                                    style={{
                                        opacity: "1",
                                        width: "894px",
                                        height: "632px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
                    <div className="pswp__ui pswp__ui--fit pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            {/* Controls are self-explanatory. Order can be changed. */}

                            <div className="pswp__counter">4 / 5</div>

                            <button
                                className="pswp__button pswp__button--close"
                                title="Close (Esc)"></button>

                            <button
                                className="pswp__button pswp__button--share"
                                title="Share"></button>

                            <button
                                className="pswp__button pswp__button--fs"
                                title="Toggle fullscreen"></button>

                            <button
                                className="pswp__button pswp__button--zoom"
                                title="Zoom in/out"></button>

                            {/* Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR */}
                            {/* element will get class pswp__preloader--active when preloader is running */}
                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip"></div>
                        </div>

                        <button
                            className="pswp__button pswp__button--arrow--left disabled"
                            title="Previous (arrow left)"></button>

                        <button
                            className="pswp__button pswp__button--arrow--right disabled"
                            title="Next (arrow right)"></button>

                        <div className="pswp__caption">
                            <div className="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

class ListingDetails extends Component {
    componentDidMount() {
        $(document).ready(function () {
            // var menuHeight = $("#menu").outerHeight();

            // Fixed Sidebar

            // $(".has-sidebar>*").theiaStickySidebar({
            //     additionalMarginTop: menuHeight + 30,
            //     additionalMarginBottom: 30,
            //     minWidth: 767,
            // });

            // Initiate select2 plugin

            // function initiateSelect2() {
            //     $(".ui-select:visible").selectric({
            //         //minimumResultsForSearch: Infinity,
            //         //dropdownCssClass: "animated fadeIn"
            //     });
            //     $(".ui-select-s:visible").selectric();
            // }
            // initiateSelect2();
            // $(window).resize(function () {
            //     initiateSelect2();
            // });
            // $(".modal").on("shown.bs.modal", function (e) {
            //     initiateSelect2();
            // });

            // Initiate Tooltops

            $('[data-toggle="tooltip"]').tooltip({ container: "body" });

            // Initiate AOS animations

            // AOS.init({
            //     offset: 50,
            // });
        });
        $(window).ready(function (e) {
            $(document).scroll(function () {
                var btnTop = $("#to-top");
                if ($(document).scrollTop() >= 50) {
                    btnTop.css({ visibility: "visible", opacity: "1" });
                } else {
                    btnTop.css({ visibility: "hidden", opacity: "0" });
                }
            });

            $("#to-top").on("click", function () {
                $("html").animate({ scrollTop: 0 }, "slow");
            });

            $(".close-panel").on("click", function () {
                $.sidr("close", "sidebar");
            });
        });

        // Photoswipe

        var initPhotoSwipeFromDOM = function (gallerySelector) {
            var parseThumbnailElements = function (el) {
                console.log(el);
                var thumbElements = $(el).closest(main_gallery).find("figure"),
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;

                for (var i = 0; i < numNodes; i++) {
                    figureEl = thumbElements[i]; // <figure> element

                    // include only element nodes
                    if (figureEl.nodeType !== 1) {
                        continue;
                    }

                    linkEl = figureEl.children[0]; // <a> element

                    size = linkEl.getAttribute("data-size").split("x");

                    // create slide object
                    item = {
                        src: linkEl.getAttribute("href"),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                    };

                    if (figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML;
                    }

                    if (linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute("src");
                    }

                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }

                return items;
            };

            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn));
            };

            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function (e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : (e.returnValue = false);

                var eTarget = e.target || e.srcElement;

                // find root element of slide
                var clickedListItem = closest(eTarget, function (el) {
                    return el.tagName && el.tagName.toUpperCase() === "FIGURE";
                });

                if (!clickedListItem) {
                    return;
                }
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = $(clickedListItem)
                        .closest(main_gallery)
                        .find("figure"),
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;

                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue;
                    }

                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
                if (index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe(index, clickedGallery);
                }
                return false;
            };

            var openPhotoSwipe = function (
                index,
                galleryElement,
                disableAnimation
            ) {
                var pswpElement = document.querySelectorAll(".pswp")[0],
                    gallery,
                    options,
                    items;

                items = parseThumbnailElements(galleryElement);

                // define options (if needed)
                options = {
                    history: false,
                    bgOpacity: 0.8,
                    loop: false,
                    barsSize: {
                        top: 0,
                        bottom: "auto",
                    },

                    // define gallery index (for URL)
                    galleryUID: $(galleryElement)
                        .closest(main_gallery)
                        .attr("data-pswp-uid"),

                    getThumbBoundsFn: function (index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = document.querySelectorAll(
                                main_gallery + " img"
                            )[index],
                            //var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll =
                                window.pageYOffset ||
                                document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();

                        return {
                            x: rect.left,
                            y: rect.top + pageYScroll,
                            w: rect.width,
                        };
                    },
                };

                options.index = parseInt(index, 10);

                // exit if index not found
                if (isNaN(options.index)) {
                    return;
                }

                if (disableAnimation) {
                    options.showAnimationDuration = 0;
                }

                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe(
                    pswpElement,
                    PhotoSwipeUI_Default,
                    items,
                    options
                );
                gallery.init();
                gallery.shout(
                    "helloWorld",
                    "John" /* you may pass more arguments */
                );

                var totalItems = gallery.options.getNumItemsFn();

                function syncPhotoSwipeWithOwl() {
                    var currentIndex = gallery.getCurrentIndex();
                    galleryTop.slideTo(currentIndex);
                    if (currentIndex == totalItems - 1) {
                        $(".pswp__button--arrow--right")
                            .attr("disabled", "disabled")
                            .addClass("disabled");
                    } else {
                        $(".pswp__button--arrow--right").removeAttr("disabled");
                    }
                    if (currentIndex == 0) {
                        $(".pswp__button--arrow--left")
                            .attr("disabled", "disabled")
                            .addClass("disabled");
                    } else {
                        $(".pswp__button--arrow--left").removeAttr("disabled");
                    }
                }
                gallery.listen("afterChange", function () {
                    syncPhotoSwipeWithOwl();
                });
                syncPhotoSwipeWithOwl();
            };

            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll(gallerySelector);

            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute("data-pswp-uid", i + 1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
        };
        var main_gallery = ".gallery-top";
        var galleryTop = new Swiper(main_gallery, {
            spaceBetween: 10,
            lazy: {
                loadPrevNext: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                init: function () {
                    initPhotoSwipeFromDOM(main_gallery);
                },
            },
        });
        var galleryThumbs = new Swiper(".gallery-thumbs", {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 5,
            touchRatio: 0.2,
            slideToClickedSlide: true,
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }

    render() {
        // console.log(this.props.data);

        return (
            <>
                <PropertyDetals />
            </>
        );
    }
}

export default ListingDetails;
