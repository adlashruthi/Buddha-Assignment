import React from "react";

import Mobile from "./components/Mobile";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <div className="md:block hidden">
        <Home />
      </div>
      <div className="md:hidden block">
        <Mobile />
      </div>
    </div>
  );
};

export default App;
