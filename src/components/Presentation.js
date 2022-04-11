import React, { useState, useEffect, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { NavLink } from "react-router-dom";
import "./styles/Presentation.css";
import Projects from "./Projects";

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
  const [newImages, setNewImages] = useState({});
  const [miniImages, setMiniImages] = useState("");

  useEffect(() => {
    const tmpImages = importAll(
      require.context("../faceImg", false, /\.(png|jpe?g|svg)$/)
    );
    //console.log(tmpImages);
    setImages(tmpImages);
  }, []);

  // useEffect(() => {
  //   const moreImages = importAll(
  //     require.context("../projImg", false, /\.(png|jpe?g|svg)$/)
  //   );
  //   setNewImages(moreImages);
  // }, []);

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

            <div className={model ? "model open" : "model"}>
              <img src={tempImgSrc} alt="" className="big-image" />
              <Projects />

              <CloseIcon
                className="close-icon"
                onClick={() => setModel(false)}
              />
              {/* {Object.keys(newImages).map((index) => (
                <img src={newImages[index]} />
              ))} */}
              <NavLink
                exact
                to={`/projects/${index}`}
                className="btn btn-primary"
              >
                Teste 03
                <PhotoLibraryIcon />
              </NavLink>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
