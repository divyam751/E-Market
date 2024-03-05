import "../styles/CartProductCard.css";
import { useDispatch } from "react-redux";
import { updateCartQty } from "../redux/productSlice";
const CartProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(updateCartQty({ payload: item, action: "ADD" }));
  };
  const handleDecrease = () => {
    dispatch(updateCartQty({ payload: item, action: "SUB" }));
  };
  const discount = Math.floor(((item?.mrp - item?.price) / item?.mrp) * 100);
  return (
    <div className="cartProductCard-container">
      <img
        src={item.image[0]}
        alt="Product Image"
        className="cartProductCard-productImg"
      />
      <div className="cartProductCard-contentBox">
        <h3>{item.brand}</h3>
        <p className="cartProductCard-contentTitle">{item.title}</p>
        <div className="cartProductCard-priceBox">
          <p>{`Rs.${item.price} `}</p>
          <p>{`( ${discount}% OFF)`}</p>
        </div>

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
              <button onClick={handleDecrease} disabled={item.quantity < 2}>
                -
              </button>
              <h4> {item.quantity} </h4>
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
