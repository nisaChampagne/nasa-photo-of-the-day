import React from "react";
import NasaHolder from "./Components/NasaHolder";
import Nav from "./Components/Nav";
import Header from "./Components/Header";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className='nasa-navs'>
      <Nav />
      </div>
      <div className="nasa-header">
        <Header />
      </div>
      <div className="nasa-holder">
        <NasaHolder />
      </div>
    </div>
  );
}

export default App;
