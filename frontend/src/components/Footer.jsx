import React from "react";
import "../styles/Footer.css";
import PlayButtons from "./PlayButtons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-linksFlex">
          <div className="footer-logo">E-Market</div>
          <div className="footer-childBox">
            <span className="footer-childbox_header">Company Info</span>
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>
          <div className="footer-childBox">
            <span className="footer-childbox_header">Legal</span>
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
            <span>Caution Notice</span>
          </div>
          <div className="footer-childBox">
            <span className="footer-childbox_header">Online shoping</span>
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
            <span>Accessories</span>
          </div>
          <div className="footer-childBox">
            <span className="footer-childbox_header">Customer policy</span>
            <span>Contact Us</span>
            <span>FAQ</span>
            <span>Track Orders</span>
            <span>Cancellation</span>
          </div>
          <div className="footer-playbuttons">
            <PlayButtons />
          </div>
        </div>
      </div>
      <p>Copyright © E-Market Corporation 2024 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
