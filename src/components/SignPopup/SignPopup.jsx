import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./SignPopup.css";

const SignPopup = ({ setSignup }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="signup">
      <form className="form-container">
        <div className="form-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setSignup(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="signup-inputs">
          {currState === "Sign Up" ? (
            <input type="text" placeholder="Your Name" required />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Sign Up" ? (
          <p>
            Already have a account{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignPopup;
