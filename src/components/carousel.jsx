import React from 'react';
import gartner from "../assests/gartner-logo-black-and-white.png";
import hp from "../assests/hp.png";
import oracle from "../assests/oracle-logo-3.png";
import '../styles/carousel.css';

const Carousel = () => {
  const names = [
    hp,
    oracle,
    gartner,
    oracle,
    gartner
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {names.map((name, index) => (
          <div key={index} className="marquee-item">
            <img src={name} alt="img" width={100} />
          </div>
        ))}
        {names.map((name, index) => (
          <div key={index + names.length} className="marquee-item">
            <img src={name} alt="img" width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
