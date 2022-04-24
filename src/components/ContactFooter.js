import React from "react";
import { Link } from "react-router-dom";
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

        <button className="btn btn-contato">
          <Link to="/contact">Clique aqui!</Link>
        </button>
      </div>
      <div className="code">
        <CodeBy />
      </div>
    </div>
  );
}
