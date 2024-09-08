import Carousel from "../components/Carousel";
import DisplaySection from "../components/DisplaySection";
import {
  carouselImages,
  brandsImages,
  globalBrandsImages,
} from "../assets/assets.js";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <>
        <Carousel data={carouselImages} />
      </>
      <DisplaySection title="MEDAL WORTHY BRANDS" images={brandsImages} />
      <DisplaySection title="GRAND GLOBAL BRANDS" images={globalBrandsImages} />
    </div>
  );
};

export default Home;
