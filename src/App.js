import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="appHeader">
          <Navbar/>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
