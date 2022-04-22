import React, { useState, useEffect, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./styles/Presentation.css";
import Projects from "./Projects";

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function Presentation() {
  const [model, setModel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");
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
      setModel(true);
      setSelectedIndex(index);
    },
    [images]
  );

  return (
    <div className="Presentation">
      {Object.keys(images).map((index) => (
        <>
          <img
            src={images[index]}
            alt=""
            onClick={() => getImg(index)}
            className="img-fluid grid-image"
          />
        </>
      ))}
      <div className={model ? "model open" : "model"}>
        <Projects selectedProject={selectedIndex} />;
        <CloseIcon className="close-icon" onClick={() => setModel(false)} />
      </div>
    </div>
  );
}
