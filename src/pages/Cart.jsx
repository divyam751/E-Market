import React from "react";
import "../styles/Cart.css";
import CartProductCard from "../components/CartProductCard";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cart } = useSelector((state) => state.products);

  return (
    <div className="cart-container">
      <div className="cart-statusBox">
        <p>CART ------ DELIVERY ------ PAYMENT</p>
      </div>
      <div className="cart-parentBox">
        <div className="cart-productsSection">
          {cart?.map((item) => {
            return <CartProductCard key={item.id} item={item} />;
          })}
        </div>
        <div className="cart-productAmountSection">
          <p className="cart-subHeadings">COUPONS</p>
          <div className="cart-couponsBox">
            <input type="text" placeholder="Apply Coupons" />
            <button className="cart-couponApplyBtn">APPLY</button>
          </div>
          <p className="cart-subHeadings">GIFTING & PERSONALISATION</p>
          <div className="cart-giftingSection">
            <img
              src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
              alt="ribbon Image"
            />
            <div className="cart-giftingText">
              <h3>Buying for a loved one?</h3>
              <p>Gift wrap and personalised message on cardd, Only for ₹ 25 </p>
              <h5>ADD GIFT WRAP</h5>
            </div>
          </div>
          <hr />
          <p className="cart-subHeadings">PRICE DETAILS</p>
          <div className="cart-priceDetailsParent">
            <div className="cart-priceDetailsChild">
              <span>Total MRP</span> <span>₹8,990</span>
            </div>
            <div className="cart-priceDetailsChild">
              <span>Discount on MRP</span> <span> - ₹6,120</span>
            </div>
            <div className="cart-priceDetailsChild">
              <span>Coupon Discount</span> <span> - ₹100</span>
            </div>
            <div className="cart-priceDetailsChild">
              <span>Platform Fee</span> <span> ₹20</span>
            </div>
            <div className="cart-priceDetailsChild">
              <span>Shiping Fee</span> <span> FREE</span>
            </div>
            <hr />

            <div className="cart-priceDetailsChild">
              <h4>Total Amount</h4> <h4> ₹2890</h4>
            </div>
          </div>
          <button className="cart-placeOrderBtn">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
