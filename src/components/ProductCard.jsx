import React from "react";
import "../styles/ProductCard.css";
import Badge from "./Badge";
const ProductCard = () => {
  const title = "Tranding";
  return (
    <div className="productCard-container">
      <Badge title={title} />
      <div className="productCard-parent">
        <img
          className="productCard-image"
          src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10410504/2019/9/19/713fcc65-75fc-4c6c-9771-aff5867b15e41568882066948-WROGN-Men-Tshirts-4691568882065599-1.jpg"
          alt="Product Image"
        />
        <div className="productCard-productRatingBox">
          <span className="productCard-productRating">{`4.1 ★  | 1k`}</span>
        </div>
        <div className="productCard-info">
          <div className="productCard-wishlistBox">
            <button className="productCard-wishlistBtn">♡ WISHLIST</button>
          </div>
          <p className="productCard-productName">WROGN</p>
          <p className="productCard-productDesc">
            Slim Fit Polo Collar Pure Cotton T-Shirt for Men
          </p>
          <div className="productCard-productPriceContainer">
            <span className="productCard-productPrice">Rs. 824</span>
            <span className="productCard-productCutOfPrice">Rs. 1499</span>
            <span className="productCard-productDiscount">
              {`(${Math.floor(((1499 - 824) / 1499) * 100) + `% OFF`})`}
            </span>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductCard;
