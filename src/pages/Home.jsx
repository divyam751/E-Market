import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { apiData, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div>Home Page</div>;
};

export default Home;
