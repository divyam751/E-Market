import React, { useState, useEffect } from "react";
import "../styles/Carousel.css";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [data.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((image, index) => (
          <div className="carousel-image" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        {/* <div className="carousel-image">
          <img
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/125983433/363240712-6a283375-f394-475d-a664-f12950ecf625.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240830T160355Z&X-Amz-Expires=300&X-Amz-Signature=0c755896a1ff72c06f6d70abf56b4b77988d2f9bfe93738bc9383f82ecbcd499&X-Amz-SignedHeaders=host&actor_id=125983433&key_id=0&repo_id=683933069"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
