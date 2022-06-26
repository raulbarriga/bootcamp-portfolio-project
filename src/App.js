import React from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main";

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
