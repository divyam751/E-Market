import React, { useCallback, useEffect, useState } from "react";
import "../styles/Carousel.css";

const Carousel = ({ arr }) => {
  const [idx, setIdx] = useState(0);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const updateContainerWidth = useCallback(() => {
    setContainerWidth(window.innerWidth);
  }, []);
  console.log(containerWidth);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIdx((prev) => (prev === arr.length - 1 ? 0 : prev + 1));
    }, 1000);

    window.addEventListener("resize", updateContainerWidth);

    return () => {
      clearInterval(intervalId),
        window.removeEventListener("resize", updateContainerWidth);
    };
  }, [arr.length, updateContainerWidth]);

  return (
    <div
      className="carousel-container"
      style={{ width: containerWidth + "px" }}
    >
      <img
        className="carousel-images"
        src={arr[idx]}
        alt=""
        style={{ width: containerWidth + "px" }}
      />
    </div>
  );
};

export default Carousel;
