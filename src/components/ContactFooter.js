import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/ContactFooter.css";
import CodeBy from "./CodeBy";

export default function ContactFooter() {
  return (
    <div className="ContactFooter container-fluid">
      <div className="contato-footer">
        <p>
          Entre em contato e vamos conversar sobre aquele projeto que você
          sempre quis!
        </p>

        <NavLink
          exact
          to="/contato"
          className="btn btn-contato"
          activeClassName="active"
        >
          Clique aqui!
        </NavLink>
      </div>
      <div className="code">
        <CodeBy />
      </div>
    </div>
  );
}
