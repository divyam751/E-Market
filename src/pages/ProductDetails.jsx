import React, { useEffect, useState } from "react";
import "../styles/ProductDetails.css";
import {
  FaExchangeAlt,
  FaHeart,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../redux/productSlice";

const ProductDetails = () => {
  const [pincode, setPincode] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [wish, setWish] = useState(false);
  const { selectedProduct, wishlist, cart } = useSelector(
    (state) => state.products
  );
  const discount = Math.floor(
    ((selectedProduct?.mrp - selectedProduct?.price) / selectedProduct?.mrp) *
      100
  );

  const dispatch = useDispatch();

  const handleSize = (e, size) => {
    setSelectedSize(size);
  };
  const handleWishlist = (item) => {
    dispatch(addToWishlist(item));
  };
  const handleCart = (item) => {
    dispatch(addToCart(item));
  };
  console.log("cart", cart);
  console.log("wishlist", wishlist);
  useEffect(() => {
    if (wishlist.find((item) => selectedProduct.id === item.id)) {
      setWish(true);
    } else {
      setWish(false);
    }
  }, [wishlist]);

  return (
    <div className="productDetails-container">
      <div className="productDetails-imageSection">
        {selectedProduct?.image?.map((img, index) => {
          return (
            <img
              src={img}
              key={index}
              className="productDetails-productImages"
            />
          );
        })}
      </div>
      <div className="productDetails-contentSection">
        <p className="productDetails-produtBrand">{selectedProduct?.brand}</p>
        <p className="productDetails-produtTitle">{selectedProduct?.title}</p>
        <div className="productDetails-produtRatingBox">
          <p className="productDetails-produtRatings">
            {`${selectedProduct?.rating?.rate} ★  | ${selectedProduct?.rating?.count}  Ratings`}
          </p>
        </div>

        <hr />
        <div className="productDetails-produtPriceBox">
          <span className="productDetails-produtPrice">
            ₹{selectedProduct?.price}
          </span>
          <span className="productDetails-produtMRP">
            MRP ₹ {selectedProduct?.mrp}
          </span>
          <span className="productDetails-produtDiscount">
            {`( ${discount}% OFF)`}
          </span>
        </div>
        <p className="productDetails-produtTex">inclusive of all taxes</p>
        <div className="productDetails-produtSizeBox">
          <p className="productDetails-produtSelectSize">Select Size</p>
          <div className="productDetails-sizeButtonsBox">
            <div
              className={`productDetails-sizeButtons ${
                selectedSize === "S" ? `selectedSizeButton` : ""
              }`}
              onClick={(e) => handleSize(e, "S")}
            >
              S
            </div>
            <div
              className={`productDetails-sizeButtons ${
                selectedSize === "M" ? `selectedSizeButton` : ""
              }`}
              onClick={(e) => handleSize(e, "M")}
            >
              M
            </div>
            <div
              className={`productDetails-sizeButtons ${
                selectedSize === "L" ? `selectedSizeButton` : ""
              }`}
              onClick={(e) => handleSize(e, "L")}
            >
              L
            </div>
            <div
              className={`productDetails-sizeButtons ${
                selectedSize === "XL" ? `selectedSizeButton` : ""
              }`}
              onClick={(e) => handleSize(e, "XL")}
            >
              XL
            </div>
          </div>
        </div>
        <div className="productDetails-produtAddtoCartButtonBox">
          <button
            className="productDetails-addToCartBtn"
            onClick={() => handleCart(selectedProduct)}
          >
            <FaShoppingCart size={20} />
            Add To Cart
          </button>
          <button
            className="productDetails-addToCartBtn"
            onClick={() => handleWishlist(selectedProduct)}
          >
            <FaHeart color={wish ? "red" : "white"} size={20} />
            WISHLIST
          </button>
        </div>
        <hr />
        <div className="productDetails-produtDetails">
          <h3>PRODUCT DETAILS</h3>

          <p>{selectedProduct?.description}</p>
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
