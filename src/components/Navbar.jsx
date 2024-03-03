import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../redux/productSlice";

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);

    const delayedDispatch = () => {
      dispatch(searchQuery(value));
    };

    const debouncedDispatch = debounce(delayedDispatch, 2000);

    debouncedDispatch();
  };

  const handleHamburger = () => {
    setOpenHamburger((prev) => !prev);
  };
  const itemCount = 6;
  // console.log(query);
  // console.log(filteredProducts);
  return (
    <div
      className={`navbar-container${
        openHamburger ? ` navbar-hamburger-open` : ""
      }`}
    >
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="navbar-linksBox">
          <Link className="nav-links" to="/">
            Home
          </Link>
          <Link className="nav-links" to="/products">
            Products
          </Link>

          <div className="nav-search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search in E-Market"
              className="nav-search"
              value={query}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="navbar-buttons">
          <Link className="nav-links" to="/login">
            <FaUserAlt />
          </Link>
          <Link className="nav-links" to="/cart">
            <div className="navbar-cartBox">
              <FaShoppingCart />
              <div className="navbar-cartBedge">{itemCount}</div>
            </div>
          </Link>
          <div className="navbar-hamburger" onClick={handleHamburger}>
            {openHamburger ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      <div className="navbar-Hamburger-linksBox">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/products">
          Products
        </Link>
        <div className="nav-search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search in E-Market"
            className="nav-search"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
