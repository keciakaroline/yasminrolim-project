import React from "react";

export default function Presentation() {
  function importAll(response) {
    let images = {};
    response.keys().map((item, index) => {
      images[item.replace("./", "")] = response(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="Presentation">
      <img src={images["p1.jpg"]} alt="" />
    </div>
  );
}
