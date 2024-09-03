import "../styles/Banner.css";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { LiaFacebook } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-contacts">
        <span>
          <FaPhone /> (225) 555-0118
        </span>
        <span>
          <TfiEmail />
          admin@emarket.com
        </span>
      </div>

      <span>Follow us and get a change to win 80% off</span>

      <div className="banner-followus">
        <span>Follow us :</span>
        <span className="banner-followus-icons">
          <AiOutlineInstagram /> <AiOutlineYoutube />
          <LiaFacebook /> <CiTwitter />
        </span>
      </div>
    </div>
  );
};

export default Banner;
