import React from "react";
import profile from "../images/yasmin-profile.png";
import logo from "../images/simbol.png";
import CodeBy from "./CodeBy";
import Presentation from "./Presentation";
import "./styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <header>
        <img src={logo} alt="" />
        <h1>Yasmin Rolim</h1>
        <h3>Arquitetura & Interiores</h3>{" "}
      </header>
      <Presentation />
      {/* Need to add a contact foot section: <ContactFooter />*/}
      <CodeBy />
    </div>
  );
}
