import React, { useState, useEffect, useCallback } from "react";
import "./styles/Projects.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function Projects({ selectedProject }) {
  const [projImages, setProjImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(selectedProject);

  useEffect(() => {
    const newImages = importAll(
      require.context("../images/ProjectImages", true, /\.(png|jpe?g|svg)$/)
    );
    // selectedProject = nome da foto (ex: p1_1.jpg)
    const selectedFolder = selectedProject.split("_")[0];
    // Object.entries(newImages) = receber todas as infos da pasta "ProjectImages" e retornar um array de array
    const arrayImages = Object.entries(newImages);
    // .filter = so funciona com array = é filtrado apenas as subpastas (p1_...)
    const filteredImages = arrayImages.filter(([key, value]) =>
      key.includes(selectedFolder + "_")
    );
    // Object.fromEntries(filteredImages) = transforma pra object de novo
    const correctedImages = Object.fromEntries(filteredImages);
    //console.log(newImages);
    setProjImages(correctedImages);
    setSelectedImage(selectedFolder + "/" + selectedProject);
    //console.log("seletec:", selectedProject);
    //console.log("filtered:", filteredImages);
  }, [selectedProject]);

  const getImg = useCallback(
    (index) => {
      setSelectedImage(index);
    },
    [projImages]
  );
  //console.log(projImages, selectedImage);
  return (
    <div id="projects" className="Projects">
      <img
        src={projImages[selectedImage]}
        alt=""
        className="img-fluid big-image"
      />

      <div className="Inner-projects">
        {Object.keys(projImages).map((index) => (
          <div>
            <img
              src={projImages[index]}
              alt=""
              className="img-fluid small-image"
              onClick={() => getImg(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
