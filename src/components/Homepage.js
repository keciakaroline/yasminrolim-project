import React from "react";
import profile from "../images/yasmin-profile-2.png";
import CodeBy from "./CodeBy";
import Presentation from "./Presentation";
import ContactFooter from "./ContactFooter";
import "./styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <header>
        <img src={profile} alt="Yasmin Rolim Profile" />
        <h1>Yasmin Rolim</h1>
        <h3>Arquitetura & Interiores</h3>
      </header>
      <Presentation />
      <ContactFooter />
      <CodeBy />
    </div>
  );
}
