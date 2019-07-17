import React from "react";
import NasaContainer from './Components/NasaContainer';
import Nav from './Components/Nav';
import NasaCard from './Components/NasaCard';
import axios from 'axios';
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
