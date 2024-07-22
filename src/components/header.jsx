import React, { useState } from "react";
import Logo from "../assests/appLogo.png";
import Close from "../assests/close.png";
import Menu from "../assests/menu-svg.png";
import Arrow from "../assests/right-arrow.png";
import "../styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDown = ["Features","Integration","Customer Stories","Pricing","Product Demo"];
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="header">
          <div className="leftHeader">
            <div>
              <img src={Logo} alt="logo" className="cursor" />
            </div>
            <div className="font-14 cursor dis-none borderBottom cursor">Features</div>
            <div className="font-14 cursor dis-none borderBottom cursor">Integration</div>
            <div className="font-14 cursor dis-none borderBottom cursor">Customer Stories</div>
            <div className="font-14 cursor dis-none borderBottom cursor">Pricing</div>
            <div className="font-14 cursor dis-none borderBottom cursor">Resources</div>
            <div className="font-14 cursor dis-none borderBottom cursor">Product Demo</div>
          </div>
          <div className="rightHeader">
            <div className="font-14 cursor dis-none borderBottom">Login</div>
            <div>
              <button className="headerSchedule-button dis-none">
                SCHEDULE DEMO
              </button>
            </div>
            <div>
              <button className="headerSign-button dis-none">
                SIGN UP FOR FREE
              </button>
            </div>
            <div onClick={openMenu}>
              <img
                src={isOpen ? Close : Menu}
                alt="Menu"
                className="cursor menu"
              />
            </div>
          </div>
        </div>
        <div className={`dropdown ${isOpen ? "active" : ""}`}>
          <div>
            {dropDown.map((item, index) => {
              return (
                <>
                  <div key={index} className="d-flex dropdown-items cursor">
                    <div className="font-16">{item}</div>
                    <div>
                      <img src={Arrow} alt="arrow" width={50}/>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-flex dropDow-buttons">
              <button className="headerSchedule-button">
                SCHEDULE DEMO
              </button>
              <button className="headerSign-button">
                SIGN UP FOR FREE
              </button>
          </div>
        </div>
        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={openMenu}
        ></div>
      </div>
    </>
  );
};

export default Header;
