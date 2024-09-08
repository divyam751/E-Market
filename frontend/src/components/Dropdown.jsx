import React, { useEffect, useState } from "react";
import "../styles/Dropdown.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/features/userSlice";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Handle dropdown visibility
  const [activeUser, setActiveUser] = useState(null);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (user) {
      let username = user.fullname.split(" ")[0];
      const firstname = username.charAt(0).toUpperCase() + username.slice(1);
      setActiveUser(firstname);
      console.log({ firstname });
    } else {
      console.log("user not found yet!!");
    }
  }, [user]);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="dropdown-activeUserIcon"></div>
        <span>{activeUser}</span>
        <span className={`chevron ${isOpen ? "rotate" : ""}`}>▼</span>
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item" onClick={toggleDropdown}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="dropdown-item">
            <Link
              to="/"
              onClick={() => {
                dispatch(logout()), toggleDropdown;
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
