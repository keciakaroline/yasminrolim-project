import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/simbol.png";
import "./styles/Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const Close = () => {
    setClick(false);
  };
  return (
    <div className="Navbar">
      <div className={click ? "main-container" : ""} onClick={() => Close()}>
        <nav className="navbar" onClick={(event) => event.stopPropagation()}>
          <div className="nav-container">
            <span className="nav-logo">
              <img src={logo} alt="" className="img-nav-logo" />
              <span>Yasmin Rolim</span>
            </span>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/projects"
                  className="nav-link"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Projetos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/sobre"
                  className="nav-link"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contato"
                  className="nav-link"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Contato
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
