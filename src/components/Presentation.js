import React, { useState, useEffect, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import "./styles/Presentation.css";

function importAll(require) {
  let images = {};
  require.keys().forEach((item) => {
    images[item.replace("./", "")] = require(item);
  });
  return images;
}

export default function Presentation() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState({});

  useEffect(() => {
    const tmpImages = importAll(
      require.context("../faceImg", false, /\.(png|jpe?g|svg)$/)
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
    <>
      <div className="Presentation">
        {Object.keys(images).map((index) => (
          <>
            <img
              src={images[index]}
              alt=""
              onClick={() => getImg(index)}
              className="img-fluid img-project"
            />
            <HashLink to={`/projects/${index}`} className="btn btn-primary">
              Teste 01
            </HashLink>
            <a href={`/projects/${index}`} className="btn btn-primary">
              Teste 02
              <PhotoLibraryIcon />
              {/* <i className="fas fa-long-arrow-alt-right"></i> */}
            </a>
            <NavLink
              exact
              to={`/projects/${index}`}
              className="btn btn-primary"
            >
              Teste 03
            </NavLink>
          </>
        ))}
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon className="close-icon" onClick={() => setModel(false)} />
      </div>
    </>
  );
}
