import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
import Carousel from "../components/Carousel";
import "../styles/Home.css";
import img1 from "../assets/posters/1.jpg";
import img2 from "../assets/posters/2.jpg";
import img3 from "../assets/posters/3.jpg";
import img4 from "../assets/posters/4.jpg";
import img5 from "../assets/posters/5.jpg";
import { brands, glowalBrands } from "../api/localApi";
import BrandsCarousel from "../components/BrandsCarousel";
const arr = [img1, img2, img3, img4, img5];
const Home = () => {
  const dispatch = useDispatch();
  const { apiData, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="home-container">
      <Carousel arr={arr} />
      <div className="home-brands-container">
        <p className="home-heading">MEDAL WORTHY BRANDS</p>
        <div className="home-brandsCarousel">
          <BrandsCarousel arr={brands} />
        </div>
        <p className="home-heading">GRAND GLOBAL BRANDS</p>
        <div className="home-brandsCarousel">
          <BrandsCarousel arr={glowalBrands} />
        </div>
      </div>
    </div>
  );
};

export default Home;
