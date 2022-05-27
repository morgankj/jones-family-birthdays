import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Dates from "./components/Dates";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="appHeader">
          <Navbar />
        </header>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
