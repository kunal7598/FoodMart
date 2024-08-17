import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // console.log(cartItems);

  const addToCart = (id) => {
    if (!cartItems[id]) {
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
      // console.log("nahi haii");
    } else setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    // console.log(id);
  };

  const deleteCart = (id) => {
    if (cartItems[id] == 1) {
      setCartItems((prev) => ({ ...prev }));
    }
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));

    // console.log(id);
  };

  const cartTotal = () => {
    let totalAmt = 0;

    for (const item in cartItems) {
      // item is index only so used the find method to search relevant information in the foodItems
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((e) => e._id === item);
        totalAmt += itemInfo.price * cartItems[item];
      }
    }
    return totalAmt;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    deleteCart,
    cartTotal,
  };
  // console.log(contextValue);
  console.log(cartItems);
  return (
    <>
      <StoreContext.Provider value={contextValue}>
        {props.children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreContextProvider;
