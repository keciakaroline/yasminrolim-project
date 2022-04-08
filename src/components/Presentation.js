import React, { useState } from "react";
import "./styles/Presentation.css";

export default function Presentation() {
  function importAll(require) {
    let images = {};
    require.keys().forEach((item) => {
      images[item.replace("./", "")] = require(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../faceImg", false, /\.(png|jpe?g|svg)$/)
  );

  // const [model, setModel] = useState(false);
  // const [tempimgsrc, setTempImgSrc] = useState("");

  //const getImg = (images) => {
  //  setTempImgSrc(images);
  //  setModel(true);
  //};
  return (
    <>
      {/* <div className={model ? "model open" : "model"}>
        <img src={tempimgsrc} alt="" />
      </div> */}

      {/* <div className="Presentation" onClick={getImg}>
        <img src={images["p1.jpg"]} alt="" className="img-fluid img-project" />
      </div> */}

      {images.map((item, index) => {
        return (
          <img src={item["p22.jpg"]} alt="" className="img-fluid img-project" />
        );
      })}
    </>
  );
}
