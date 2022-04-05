import React from "react";
import profile from "../images/yasmin-profile.png";
import CodeBy from "./CodeBy";
import Presentation from "./Presentation";

export default function Homepage() {
  return (
    <div className="Homepage">
      <header className="container-fluid">
        <div className="row">
          <div className="col introdution">
            <h1>Yasmin Rolim</h1>
            <h3>Arquitetura & Interiores</h3>{" "}
            {/*add letter-spacing on styles */}
          </div>
          <div className="col d-none d-lg-block">
            <img src={profile} alt="Yasmin Rolim" className="img-fluid" />
          </div>
        </div>
      </header>
      <Presentation />
      {/* Need to add a contact foot section: <ContactFooter />*/}
      <CodeBy />
    </div>
  );
}
