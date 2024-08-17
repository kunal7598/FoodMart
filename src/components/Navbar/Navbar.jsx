import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setSignup }) => {
  const [selected, setSelected] = useState("Home");

  const { cartTotal } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={assets.mera_icon_2}
          // style={{ width: "275px" }}
          className="logo"
        />
      </Link>

      <ul className="menu">
        <Link
          to="/"
          className={selected == "Home" ? "active" : ""}
          onClick={() => setSelected("Home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={selected == "Menu" ? "active" : ""}
          onClick={() => setSelected("Menu")}
        >
          Menu
        </a>

        <a
          href="#mobile-app"
          className={selected == "Download" ? "active" : ""}
          onClick={() => setSelected("Download")}
        >
          Download
        </a>
        <a
          href="#footer"
          className={selected == "Contact" ? "active" : ""}
          onClick={() => setSelected("Contact")}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <div className="search-icon">
          <img src={assets.search_icon} alt="" />
        </div>
        <div className="basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={cartTotal() ? "dot" : ""}></div>
        </div>

        <button className="k-btn" onClick={() => setSignup(true)}>
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
