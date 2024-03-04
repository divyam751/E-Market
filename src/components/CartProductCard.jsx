import React, { useState } from "react";
import "../styles/CartProductCard.css";
const CartProductCard = () => {
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="cartProductCard-container">
      <img
        src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/3009070/2018/5/31/f48fa8e4-ee70-4118-8a1d-a898037036bc1527767035968-Roadster-Men-Tshirts-1311527767034405-1.jpg"
        alt="Product Image"
        className="cartProductCard-productImg"
      />
      <div className="cartProductCard-contentBox">
        <h3>Roadster</h3>
        <p>Men Maroon Solid Polo Collar T-shirt</p>
        <p>Rs.419 20% OFF</p>
        <div className="cartProductCard-numBox">
          <label className="cartProductCard-sizes">
            Size :
            <select name="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </label>
          <label className="cartProductCard-quantity">
            Qty :
            <div className="cartProductCard-qtyCounter">
              <button onClick={handleDecrease} disabled={count < 2}>
                -
              </button>
              <h4> {count} </h4>
              <button onClick={handleIncrease}> + </button>
            </div>
          </label>
        </div>
        <div className="cartProductCard-buttonBox">
          <button className="cartProductCard-removeBtn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
