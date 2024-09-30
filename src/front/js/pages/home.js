import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Home = () => {
  return (
    <div className="container">
      <h1 className="selena-title">S E L E N A</h1>

      <div className="center-content">
        <h2 className="find-your">FIND YOUR</h2>
        <h2 className="muse">MUSE</h2>

          <Link to="/enter">
            <button className="enter-button">
              Enter
              <img
                src="https://hydrapolis.us/wp-content/uploads/2022/12/PLAYA-BLANCA-986x1024.png"
                alt="PLAYA-BLANCA"
                className="right-image"
              />
            </button>
          </Link>
      </div>
    </div>

  );
};
