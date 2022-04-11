import React, { useState, useEffect, useCallback } from "react";
import "./styles/Presentation.css";
import CloseIcon from "@mui/icons-material/Close";

function importAll(require) {
  let images = {};
  require.keys().forEach((item) => {
    images[item.replace("./", "")] = require(item);
  });
  return images;
}

export default function Presentation() {
  const [model, setModel] = useState(false);
  const [tempimgsrc, setTempImgSrc] = useState("");
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
      <div className={model ? "model open" : "model"}>
        <img src={tempimgsrc} alt="" />
        <CloseIcon />
      </div>

      <div className="Presentation">
        {Object.keys(images).map((index) => (
          <img
            src={images[index]}
            alt=""
            onClick={() => getImg(index)}
            className="img-fluid img-project"
          />
        ))}
      </div>
    </>
  );
}
