import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { cartTotal } = useContext(StoreContext);
  return (
    <form action="" className="place-order">
      <div className="order-left">
        <p className="title">Delievery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email-Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Pin-Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-details">
              <p>SubTotal</p>
              <p>${cartTotal()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delievery Fee</p>
              <p>${10}</p>
            </div>
            <hr />
            <div className="cart-details">
              <b>Total</b>
              <b>${cartTotal() + 10}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
