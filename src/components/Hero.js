import React from 'react';

const Hero = ({ handleShopNow }) => {
  return (
    <div className="hero-section">
      <h1>Welcome to E-Commerce</h1>
      <p>Discover the best deals on top-quality products.</p>
      <button onClick={handleShopNow} className="shop-now-btn">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
