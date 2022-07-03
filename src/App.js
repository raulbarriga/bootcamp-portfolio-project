import React from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter 
    // basename={process.env.REACT_APP_PUBLIC_URL}
    >
      <div id="App" className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
