import React, { useState, useEffect, useCallback } from "react";
import CodeBy from "./CodeBy";
import { NavLink } from "react-router-dom";
import "./styles/Projects.css";
// import dataImages from "./DataImages";

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function Projects() {
  const [projImages, setProjImages] = useState({});

  useEffect(() => {
    const newImages = importAll(
      require.context("../images/ProjectImages", true, /\.(png|jpe?g|svg)$/)
    );
    //console.log(newImages);
    setProjImages(newImages);
  }, []);

  return (
    <div className="Projects" id="projects">
      {Object.keys(projImages).map((index) => (
        <img src={projImages[index]} alt="" className="img-fluid" />
      ))}
      {/* <NavLink exact to={`/`} className="btn btn-primary">
        Voltar
      </NavLink> */}
    </div>
  );
}
