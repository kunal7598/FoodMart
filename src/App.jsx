import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import SignPopup from "./components/SignPopup/SignPopup";
const App = () => {
  const [signup, setSignup] = useState(false);
  return (
    <>
      {signup ? <SignPopup setSignup={setSignup} /> : <></>}
      <div className="app">
        <Navbar setSignup={setSignup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
