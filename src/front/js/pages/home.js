import React from 'react';
import "../../styles/home.css";


export const Home = () => {
  return (
    <div className="container">
      <h1 className="selena-title">S E L E N A</h1>

      <div className="center-content">
        <h2 className="find-your">FIND YOUR</h2>
        <h2 className="muse">MUSE</h2>

        <button className="enter-button">Enter
          <img 
            src="https://hydrapolis.us/wp-content/uploads/2022/12/PLAYA-BLANCA-986x1024.png" 
            alt="Beach" 
            className="right-image"
          /></button>
      </div>
    </div>

  );
};
