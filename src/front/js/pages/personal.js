import React, { useState } from "react";
import "../../styles/room.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Personal = () => {
  // Use an array to manage multiple collapsible sections
  const [isOpen, setIsOpen] = useState([false, false]); // Add more false values for additional sections

  const toggleCollapse = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the specific section
      return newState;
    });
  };

  return (
    <>
      <div className="holder">
        {/* <video className="background-video" autoPlay muted loop>
         <source
            src="https://video.wixstatic.com/video/3fd3c0_c16ac619f8724148939045c3a97ab2ce/480p/mp4/file.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        {/* <div className="video-background">
          <iframe
            className="background-video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/16jA-6hiSUo?si=IgqcrUzilLItNgAU"
            frameborder="0"
            allow=" autoplay; picture-in-picture;"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div> */}
        <h1 className="welcome-message">Welcome, ExampleUser1!</h1>
        <h1 className="current">Current Muse</h1>
        <h1 className="muses">The Weeknd, Playboi Carti - Timeless </h1>
        <Link to="/">
          <button className="leave-button">+Upload</button>
        </Link>
        <Link to="/">
          <button className="dapaint-button">DaPaint</button>
        </Link>
        <Link to="/">
          <button className="ebay-button">eBay</button>
        </Link>
      </div>

      {/* Left Offcanvas Holder */}
      <div className="leftOffCanvasHolder">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          Your Muses
        </button>

        <div
          className="offcanvas offcanvas-start"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h1 className="offcanvas-title" id="staticBackdropLabel">
              Your Muses
              {/* <h5 className="offcanvas-title">ROOM PIN: 5134</h5> */}
            </h1>
            <img
              data-bs-dismiss="offcanvas"
              src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/512/Cross-Mark-Flat-icon.png"
              alt="Close"
              className="close"
            />
          </div>
          <div className="offcanvas-body">
            {/* <div className="d-flex justify-content-center mb-3">
              <button className="btn btn-success me-2">Save Muse</button>
              <button className="btn btn-info">Add Muse</button>
            </div> */}
            <div className="list-group gap-3 text-center">
              {/* <h5>
                If you don't like the upcoming muse, you can up or down vote it
                or add your own muse!
              </h5> */}
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => toggleCollapse(1)} // Pass index 1
                aria-expanded={isOpen[1]}
                aria-controls="uniqueCollapseId"
              >
                Rewards
              </button>
              <div
                className="collapse"
                id="uniqueCollapseId"
                style={{ display: isOpen[1] ? "block" : "none" }} // Use isOpen[1]
              >
                <div className="vote-icons">
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Red-Triangle-3d-icon.png"
                    alt="up-icon"
                    className="up-icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Red-Triangle-Pointed-Down-3d-icon.png"
                    alt="down-icon"
                    className="down-icon"
                  />
                </div>
              </div>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => toggleCollapse(2)} // Pass index 1
                aria-expanded={isOpen[1]}
                aria-controls="museCollapseId"
              >
                Saved Muses
              </button>
              <div
                className="collapse"
                id="museCollapseId"
                style={{ display: isOpen[2] ? "block" : "none" }} // Use isOpen[1]
              >
                <div className="Saved-Muses">
                  <Link to="/room">
                    <button
                      className="btn btn-info"
                      type="button"
                      style={{ width: "100%" }}
                    >
                      Turn Up!!! from Nostalgia
                    </button>
                  </Link>
                  <Link to="/room">
                    <button
                      className="btn btn-info"
                      type="button"
                      style={{ width: "100%" }}
                    >
                      Muse_name from Room_name
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Offcanvas Holder */}
      <div className="rightOffCanvasHolder">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          300 Rooms
        </button>

        <div
          className="offcanvas offcanvas-end"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h1 className="offcanvas-title" id="offcanvasRightLabel">
              ROOMS AVAILABLE
              {/* <h5 className="offcanvas-title">ROOM PIN: 5134</h5> */}
            </h1>
            <img
              data-bs-dismiss="offcanvas"
              src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/512/Cross-Mark-Flat-icon.png"
              alt="Close"
              className="close"
            />
          </div>
          <div className="offcanvas-body">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <Link to="/">
              <button className="create-button">Create A Room</button>
            </Link>

            <div className="list-group gap-2 text-center">
              {/* guest Collapsible Section */}
              <Link to="/room">
                <button
                  className="btn btn-danger"
                  type="button"
                  style={{ width: "100%" }}
                >
                  Glamorus - 21
                </button>
              </Link>

              <Link to="/room">
                <button
                  className="btn btn-danger"
                  type="button"
                  style={{ width: "100%" }}
                >
                  Nostalgia - 2
                </button>
              </Link>
              {/*<button
                className="btn btn-danger"
                type="button"
                onClick={() => toggleCollapse(0)} // Pass index 0
              >
                Nostalgia - 2
              </button>
              <div
                className="collapse"
                style={{ display: isOpen[0] ? "block" : "none" }} // Use isOpen[0]
              >
                <div className="guest">
                  <button className="btn btn-primary">Make An Account</button>
                </div>
              </div>
              {/* Second Collapsible Section *
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => toggleCollapse(1)} // Pass index 1
                aria-expanded={isOpen[1]}
                aria-controls="uniqueCollapseId"
              >
                OVYED DENO
              </button>
              <div
                className="collapse"
                id="uniqueCollapseId"
                style={{ display: isOpen[1] ? "block" : "none" }} // Use isOpen[1]
              >
                <div className="social-icons">
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="TikTok"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="YouTube"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="TikTok"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="YouTube"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="TikTok"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="YouTube"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="TikTok"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="YouTube"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="YouTube"
                    className="icon"
                  />
                  <img
                    src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/A-Button-Blood-Type-3d-icon.png"
                    alt="YouTube"
                    className="icon"
                  />
                </div>
              </div> */}
            </div>
            <div className="d-flex justify-content-center mb-3 mt-3">
              <button className="btn btn-success me-2">DaPaint</button>
              <button
                className="btn btn-info"
                onClick={() => (window.location.href = "https://www.ebay.com")}
              >
                eBay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
