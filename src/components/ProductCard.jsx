import React from "react";
import "../styles/ProductCard.css";
import Badge from "./Badge";
const ProductCard = ({ item }) => {
  // console.log(item);
  const discount = Math.floor(((item.mrp - item.price) / item.mrp) * 100);
  return (
    <div className="productCard-container">
      {item.badge !== null ? (
        <Badge title={item.badge} />
      ) : (
        <div className="badge-container"></div>
      )}
      <div className="productCard-parent">
        <img
          className="productCard-image"
          src={item.image[0]}
          alt={item.brand}
        />
        <div className="productCard-productRatingBox">
          <span className="productCard-productRating">{`${item.rating.rate} ★  | ${item.rating.count} `}</span>
        </div>
        <div className="productCard-info">
          <div className="productCard-wishlistBox">
            <button className="productCard-wishlistBtn">♡ WISHLIST</button>
          </div>
          <p className="productCard-productName">{item.brand}</p>
          <p className="productCard-productDesc">{item.title}</p>
          <div className="productCard-productPriceContainer">
            <span className="productCard-productPrice">Rs. {item.price}</span>
            <span className="productCard-productCutOfPrice">
              Rs. {item.mrp}
            </span>
            <span className="productCard-productDiscount">
              {`(${discount + `% OFF`})`}
            </span>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductCard;
