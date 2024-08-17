import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="mobile-app" id="mobile-app">
      <p>
        For Better Experience Download <br />
        <span>FoodMart</span> App
      </p>
      <div className="img-mobile">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
