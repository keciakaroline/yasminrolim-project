import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/contato" element={<Contato />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
