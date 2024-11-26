// src/pages/Home.js
import React from 'react';
import elecimage from '../components/assets/electronics.jpg';
import clothimage from '../components/assets/clothing.jpg';
const Home = ({ onShopNowClick, handleCategoryClick }) => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Shop the best products at the best prices!</p>
        <button onClick={onShopNowClick}>Shop Now</button>
      </section>
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-cards">
          <div className="category-card" onClick={() => handleCategoryClick('electronics')} >
            <img src={elecimage} alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card" onClick={() => handleCategoryClick('clothing')} >
            <img src={clothimage} alt="Clothing" />
            <h3>Clothing</h3>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
