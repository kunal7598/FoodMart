import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FoodDisplay.css";
import FoodCard from "../FoodCard/FoodCard";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  //   console.log(contextObj);
  return (
    <div className="food-display">
      <h2>
        Top <span>Dishes</span> near you
      </h2>
      <div className="food-display-list">
        {food_list.map((item, ind) => {
          if (category === "All" || item.category === category) {
            return <FoodCard key={ind} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
