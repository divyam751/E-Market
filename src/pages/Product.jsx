import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
const Product = () => {
  const dispatch = useDispatch();
  const { apiData, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(apiData);
  return (
    <div className="productPage-container">
      {loading && "Loading..."}
      {apiData?.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Product;
