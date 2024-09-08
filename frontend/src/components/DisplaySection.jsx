import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DisplaySection.css";

const DisplaySection = ({ title, images }) => {
  const navigate = useNavigate();
  return (
    <div className="displaySection-container">
      <div className="displaySection-wrapper">
        <h2>{title}</h2>
        <div className="displaySection-ImgParent">
          {images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`brand-${index}`}
              onClick={() => navigate("/products")}
            />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default DisplaySection;
