import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/projects" element={<Projects />} /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
