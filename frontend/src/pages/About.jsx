import React from "react";
import { FaTruck, FaHandHoldingUsd, FaStar } from "react-icons/fa"; // Importing React Icons
import "../styles/About.css";
import aboutUsImage from "../assets/images/about/about.webp"; // Example image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <div className="about-image">
            <img src={aboutUsImage} alt="About E-Market" />
          </div>
          <h1>Welcome to E-Market</h1>
          <p>
            At <strong>E-Market</strong>, we strive to provide you with the most
            seamless and satisfying online shopping experience. Whether you're
            looking for the latest gadgets, fashion trends, or home essentials,
            we have it all in one place. Our platform offers an extensive
            variety of products with top-notch quality at competitive prices.
          </p>
          <p>
            Our mission is to connect people with the products they love,
            ensuring convenience, variety, and excellent customer service. We
            constantly update our offerings and introduce new deals, so there's
            always something new and exciting waiting for you. Shop smart, shop
            conveniently, and shop at E-Market.
          </p>
        </div>
      </div>

      <div className="about-features">
        <h2>Why Choose E-Market?</h2>
        <div className="about-features-grid">
          <div className="about-feature">
            <FaTruck className="about-icon" />
            <h3>Fast Delivery</h3>
            <p>
              Get your products delivered to your doorstep swiftly with our
              efficient delivery system.
            </p>
          </div>
          <div className="about-feature">
            <FaHandHoldingUsd className="about-icon" />
            <h3>Secure Payments</h3>
            <p>
              Enjoy secure and hassle-free transactions with multiple payment
              options.
            </p>
          </div>
          <div className="about-feature">
            <FaStar className="about-icon" />
            <h3>Top Quality Products</h3>
            <p>
              We ensure that every product meets our strict quality standards
              before it reaches you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
