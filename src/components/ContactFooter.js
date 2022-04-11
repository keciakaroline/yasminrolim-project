import React from "react";
import { Link } from "react-router-dom";

export default function ContactFooter() {
  return (
    <div className="FooterContact">
      <h2 className="mb-3">Contato</h2>
      <p>
        Entre em contato e vamos conversar sobre aquele projeto que voce sempre
        quis!
      </p>
      <Link to="/contact">Clique aqui para entrar em contato!</Link>
    </div>
  );
}
