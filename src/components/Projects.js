import React, { useState, useEffect, useCallback } from "react";
import CodeBy from "./CodeBy";
import { NavLink } from "react-router-dom";
import Presentation from "./Presentation";
import "./styles/Projects.css";

function importAll(require) {
  let images = {};
  require.keys().forEach((item) => {
    images[item.replace("./", "")] = require(item);
  });
  return images;
}

export default function Projects({ index }) {
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState({});
  const [newImages, setNewImages] = useState({});
  const [miniImages, setMiniImages] = useState("");

  useEffect(() => {
    const moreImages = importAll(
      require.context("../projImg", false, /\.(png|jpe?g|svg)$/)
    );
    setNewImages(moreImages);
  }, []);

  return (
    <div className="Projects" id="projects">
      {/* {Object.keys(images).map((index) => (
        <section>
          <img src={images[index]} />
        </section>
      ))} */}
      <section className="small-images">
        <img src={newImages["p1_2.jpg"]} alt="" className="" />
        <img src={newImages["p2.jpg"]} alt="" className="" />
      </section>

      {/* <NavLink exact to={`/`} className="btn btn-primary">
        Voltar
      </NavLink> */}
    </div>
  );
}
