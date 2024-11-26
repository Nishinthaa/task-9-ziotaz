import React from 'react';
import elecimage from '../components/assets/electronics.jpg';
import clothimage from '../components/assets/clothing.jpg';
import Hero from '../components/Hero'; // Importing the Hero component

const Home = ({ onShopNowClick, handleCategoryClick }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero handleShopNow={onShopNowClick} />

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-cards">
          <div className="category-card" onClick={() => handleCategoryClick('electronics')}>
            <img src={elecimage} alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card" onClick={() => handleCategoryClick('clothing')}>
            <img src={clothimage} alt="Clothing" />
            <h3>Clothing</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
  <section className="contact">
  <h2>Contact Us</h2>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>
    </div>
  );
};

export default Home;


