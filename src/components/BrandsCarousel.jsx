import React from "react";
import "../styles/BrandCarousel.css";

const BrandsCarousel = ({ arr }) => {
  console.log(arr);

  return (
    <div className="brandCarousel-container">
      {arr.map((item) => (
        <img
          className="brands-images"
          src={item.img}
          alt="brands"
          key={item.id}
        />
      ))}
    </div>
  );
};

export default BrandsCarousel;
