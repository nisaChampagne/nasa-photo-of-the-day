import React from "react";
import NasaContainer from './Components/NasaContainer';
import Nav from './Components/Nav';
import Header from './Components/Header';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
        <NasaContainer />
    </div>
  );
}

export default App;
