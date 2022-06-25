import React from "react";
import ReactDOM from "react-dom";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
//import "theia-sticky-sidebar/dist/ResizeSensor.min.js";
//import "theia-sticky-sidebar/dist/theia-sticky-sidebar.min.js";
import "font-awesome/css/font-awesome.css";
// Styles must use direct files imports
import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/free-mode/free-mode.min.css"; // Pagination module
import "swiper/modules/thumbs/thumbs.min.css"; // Pagination module
import "./App.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
