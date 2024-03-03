import React, { useState } from "react";
import "../styles/ProductDetails.css";
import { FaExchangeAlt, FaShoppingCart, FaTruck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";

const ProductDetails = () => {
  const [pincode, setPincode] = useState(false);
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
        <hr />
        <div className="productDetails-produtDetails">
          <h3>PRODUCT DETAILS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            animi sint? Fugiat eum perspiciatis totam, deserunt quo assumenda
            repellat consectetur tempore unde alias ut eveniet incidunt
            laboriosam corporis maxime impedit.
          </p>
        </div>
        <hr />
        <div className="productDetails-produtDelivery">
          <p className="productDetails-produtDeliveryHeading">
            DELIVERY OPTIONS <FaTruck />
          </p>
          <div className="productDetails-pincodeBox">
            <input
              type="number"
              className="productDetails-pincode"
              maxLength={2}
            />
            <span
              className="productDetails-pincodeCheckBtn"
              onClick={() => setPincode((prev) => !prev)}
            >
              {pincode ? "Change" : "Check"}
            </span>
          </div>

          {pincode ? (
            <div className="productDetails-productDeliveryTime">
              <p className="productDetails-productDeliveryDetails">
                <TbTruckDelivery size={30} />
                Get it with in {Math.floor(Math.random() * 4) + 2} Days{" "}
              </p>
              <p className="productDetails-productDeliveryDetails">
                {" "}
                <GiPayMoney size={30} />
                Pay on delivery available{" "}
              </p>
              <p className="productDetails-productDeliveryDetails">
                <FaExchangeAlt size={30} />
                Easy 14 days return & exchange available{" "}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
