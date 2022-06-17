import React from "react";
import Main from "./components/Main";
import { HashRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <div id="App" className="App">
        <Main />
      </div>
    </HashRouter>
  );
};

export default App;
