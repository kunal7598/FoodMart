import React, { useContext } from "react";
import "./FoodCard.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodCard = ({ item }) => {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, deleteCart } = useContext(StoreContext);

  // console.log(item);

  return (
    <div className="food-card">
      <div className="img-container">
        <img src={item.image} alt="" className="food-image" />

        {!cartItems[item._id] ? (
          <img
            className="add"
            onClick={() => addToCart(item._id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="item-counter">
            <img
              onClick={() => deleteCart(item._id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[item._id]}</p>
            <img
              onClick={() => addToCart(item._id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-rating">
          <p>{item.name}</p>
          <div>
            <img src={assets.rating_starts} alt="" />
          </div>
        </div>
        <p className="item-desc">{item.description}</p>
        <p className="item-price">${item.price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
