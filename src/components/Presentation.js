import React, { useState, useEffect, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { NavLink } from "react-router-dom";
import "./styles/Presentation.css";
import Projects from "./Projects";
// import dataImages from "./DataImages";
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function Presentation() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState({});

  useEffect(() => {
    const tmpImages = importAll(
      require.context("../images/FaceImages", false, /\.(png|jpe?g|svg)$/)
    );
    //console.log(tmpImages);
    setImages(tmpImages);
  }, []);

  const getImg = useCallback(
    (index) => {
      setTempImgSrc(images[index]);
      setModel(true);
    },
    [images]
  );

  return (
    <div className="Presentation">
      {Object.keys(images).map((index) => (
        <img
          src={images[index]}
          alt=""
          onClick={() => getImg(index)}
          className="img-fluid"
        />
      ))}

      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" className="big-image" />
        <Projects />;{/* <ImageGallery items={dataImages.project_2} /> */}
        <CloseIcon className="close-icon" onClick={() => setModel(false)} />
        {/* <NavLink exact to={`/projects/${index}`} className="btn btn-primary">
            Teste 03
            <PhotoLibraryIcon />
          </NavLink> */}
      </div>
    </div>
  );
}
