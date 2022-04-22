import CodeBy from "./CodeBy";
import React from "react";
import "./styles/Contato.css";

export default function Contato() {
  return (
    <div className="Contact text-center" id="contato">
      <h1>Entre em contato!</h1>

      <ul>
        <li className="contact-link">
          <h3>Email:</h3>
          <a href="mailto:arq.yasminrolim@gmail.com" alt="email link">
            arq.yasminrolim@gmail.com
          </a>
        </li>
        <li className="contact-link">
          <h3>Whatsapp:</h3>
          <a
            href="https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F5584999303002&e=ATNdrcUcU9Wrk1GhZgE7DtRjMm2QwzIuKXIE2vbi6kfZk8YwjxtpDfli5dhXMKei_o5AkE2XLhCPIeOExaaGdg&s=1"
            alt="phone number"
          >
            +55 84 99930-3002
          </a>
        </li>
        <li className="contact-link">
          <h3>Instagram:</h3>
          <a
            href="https://www.instagram.com/arq.yasminrolim/"
            alt="instagram page"
            target="_blank"
            rel="noreferrer"
          >
            @arq.yasminrolim
          </a>
        </li>
      </ul>

      <CodeBy />
    </div>
  );
}
