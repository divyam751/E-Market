import image1 from "../assets/images/carousel/1.webp";
import image2 from "../assets/images/carousel/2.webp";
import image3 from "../assets/images/carousel/3.webp";
import image4 from "../assets/images/carousel/4.webp";
import image5 from "../assets/images/carousel/6.webp";
import Carousel from "../components/Carousel";

import "../styles/Home.css";

const data = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image1,
  image2,
  image3,
  image4,
  image5,
];

const Home = () => {
  return (
    <div className="home-container">
      <Carousel data={data} />
    </div>
  );
};

export default Home;
