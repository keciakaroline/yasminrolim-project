import React from "react";
import "./styles/CodeBy.css";

export default function CodeBy() {
  return (
    <div className="CodeBy">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/keciasantos/"
        target="_blank"
        rel="noreferrer"
      >
        Kécia Santos
      </a>{" "}
      hosted on{" "}
      <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
        Netlify.
      </a>
      <div class="social-link">
        <span>
          <a
            href="https://github.com/keciasantos"
            target="_blank"
            title="GitHub page - Kécia Santos"
            alt="GitHub page"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/keciasantos/"
            target="_blank"
            title="Linkedin page - Kécia Santos"
            alt="Linkedin page"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
