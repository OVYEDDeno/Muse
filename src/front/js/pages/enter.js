import React from "react";
import { Link } from "react-router-dom";
import "../../styles/enter.css";

export const Enter = () => {
  return (
    <div className="container">
      <h1 className="selena-title">S E L E N A</h1>
      <div className="group-input">
      <label htmlFor="name" className="input-label">
        Name
      </label>
      <input type="text" id="name" className="input-field" />
      <label htmlFor="roomPin" className="input-label">
        Room Pin
      </label>
      <input type="text" id="roomPin" className="input-field" />
      </div>
      <div className="button-container">
      <Link to="/room">
        <button className="enter-button">
          Enter
          <img
            src="https://hydrapolis.us/wp-content/uploads/2022/12/PLAYA-BLANCA-986x1024.png"
            alt="PLAYA-BLANCA"
            className="right-image"
          />
        </button>
      </Link>
      <Link to="/shop">
        <button className="enter-button">
          Auth 
          <img
            src="https://hydrapolis.us/wp-content/uploads/2022/12/PLAYA-BLANCA-986x1024.png"
            alt="PLAYA-BLANCA"
            className="right-image"
          />
        </button>
      </Link>
     </div></div>
  );
};
