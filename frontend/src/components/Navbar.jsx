import "../styles/Navbar.css";
import { FaRegUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">E-Market</div>
        <div className="navbar-links">
          <ul className="navbar-links-left">
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/products"> Shop </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
            <RouterLink to="/blog"> Blog </RouterLink>
            <RouterLink to="/contact"> Contact </RouterLink>
          </ul>

          <div className="navbar-links-right">
            <span>
              <FaRegUser /> <RouterLink to="/login"> Login </RouterLink> /{" "}
              <RouterLink to="/register"> Register </RouterLink>
            </span>
            <span>
              <IoSearch />
              <IoCartOutline onClick={() => navigate("/cart")} />
              <IoIosHeartEmpty />
            </span>
          </div>
        </div>
      </nav>

      <nav
        className={`mob-navbar-container ${hamburger ? "" : `mob-navbar-hide`}`}
      >
        <div className="mob-navbar-header">
          <div className="navbar-logo">E-Market</div>
          <div
            className="navbar-hamburger"
            onClick={() => setHamburger((prev) => !prev)}
          >
            {hamburger ? <GiHamburgerMenu /> : <ImCross />}
          </div>
        </div>
        <div className="mob-navbar-links">
          <ul className="navbar-links-left mob-navbar-colflex">
            <li>Home</li>
            <li>Shop</li>

            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>

          <div className="navbar-links-right mob-navbar-colflex">
            <span>
              <FaRegUser /> Login / Register
            </span>
            <span>
              <IoSearch />
              <IoCartOutline />
              <IoIosHeartEmpty />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
