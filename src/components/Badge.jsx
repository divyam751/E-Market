import React from "react";
import "../styles/Badge.css";
const Badge = ({ title }) => {
  return (
    <div className="badge-container">
      <div className="badge-topbox">{title} </div>
      <div className="badge-transparentBox"></div>
    </div>
  );
};

export default Badge;
