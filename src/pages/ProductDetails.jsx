import React from "react";
import "../styles/ProductDetails.css";
import { FaShoppingCart } from "react-icons/fa";
const ProductDetails = () => {
  return (
    <div className="productDetails-container">
      <div className="productDetails-imageSection">
        <img
          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/3009070/2018/5/31/f48fa8e4-ee70-4118-8a1d-a898037036bc1527767035968-Roadster-Men-Tshirts-1311527767034405-1.jpg"
          alt=""
          className="productDetails-productImages"
        />
        <img
          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/3009070/2018/5/31/f48fa8e4-ee70-4118-8a1d-a898037036bc1527767035968-Roadster-Men-Tshirts-1311527767034405-1.jpg"
          alt=""
          className="productDetails-productImages"
        />
        <img
          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/3009070/2018/5/31/f48fa8e4-ee70-4118-8a1d-a898037036bc1527767035968-Roadster-Men-Tshirts-1311527767034405-1.jpg"
          alt=""
          className="productDetails-productImages"
        />
        <img
          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/3009070/2018/5/31/f48fa8e4-ee70-4118-8a1d-a898037036bc1527767035968-Roadster-Men-Tshirts-1311527767034405-1.jpg"
          alt=""
          className="productDetails-productImages"
        />
      </div>
      <div className="productDetails-contentSection">
        <p className="productDetails-produtBrand">Roadster</p>
        <p className="productDetails-produtTitle">
          Men Maroon Solid Polo Collar T-shirt
        </p>
        <div className="productDetails-produtRatingBox">
          <p className="productDetails-produtRatings">4.1 ★ | 7.6k Ratings</p>
        </div>
        <hr />
        <div className="productDetails-produtPriceBox">
          <span className="productDetails-produtPrice">₹399</span>
          <span className="productDetails-produtMRP">MRP ₹999</span>
          <span className="productDetails-produtDiscount">(60% OFF)</span>
        </div>
        <p className="productDetails-produtTex">inclusive of all taxes</p>
        <div className="productDetails-produtSizeBox">
          <p className="productDetails-produtSelectSize">Select Size</p>
          <div className="productDetails-sizeButtonsBox">
            <div className="productDetails-sizeButtons">S</div>
            <div className="productDetails-sizeButtons">M</div>
            <div className="productDetails-sizeButtons">L</div>
            <div className="productDetails-sizeButtons">XL</div>
          </div>
        </div>
        <div className="productDetails-produtAddtoCartButtonBox">
          <button className="productDetails-addToCartBtn">
            <FaShoppingCart />
            Add To Cart
          </button>
          <button className="productDetails-addToCartBtn">♡ WISHLIST</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
