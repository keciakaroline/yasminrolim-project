import React from "react";
import { Link } from "react-router-dom";
import "./styles/ContactFooter.css";

export default function ContactFooter() {
  return (
    <div className="ContactFooter container-fluid">
      <p>
        Entre em contato e vamos conversar sobre aquele projeto que você sempre
        quis!
      </p>
      <Link to="/contact">Clique aqui!</Link>
    </div>
  );
}
