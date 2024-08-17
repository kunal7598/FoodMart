import { assets } from "../../assets/assets";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="left-content">
          <div className="main-icon">
            <img src={assets.mera_icon_2} className="main" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            similique sapiente vitae delectus at consequuntur deleniti quod,
            accusamus nulla modi! Deserunt, laborum? Totam iste aliquam officiis
            porro molestiae veritatis quae?
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} style={{ width: "45px" }} alt="" />
            <img src={assets.twitter_icon} style={{ width: "45px" }} alt="" />
            <img src={assets.linkedin_icon} style={{ width: "45px" }} alt="" />
          </div>
        </div>
        <div className="center-content">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>Amout Us</li>
            <li>Delhivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right-content">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-6201775745</li>
            <li>raashisharma646@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 FootMart.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
