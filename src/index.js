import React from "react";
import ReactDOM from "react-dom";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "theia-sticky-sidebar/dist/ResizeSensor.min.js";
//import "theia-sticky-sidebar/dist/theia-sticky-sidebar.min.js";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import App from "./App";

ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.getElementById("root")
);
