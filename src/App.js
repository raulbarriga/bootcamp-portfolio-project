import React from "react";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div id="App" className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
