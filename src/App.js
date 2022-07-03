import React from "react";
import { HashRouter } from "react-router-dom";

import Main from "./components/Main";

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
