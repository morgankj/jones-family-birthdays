import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="appHeader">
          <Navbar/>
          <Home />
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
