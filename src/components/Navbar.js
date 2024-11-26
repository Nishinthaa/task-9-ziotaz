// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = ({ changePage, handleSearch }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode', !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <div>
        <button onClick={() => changePage('home')}>Home</button>
        <button onClick={() => changePage('products')}>Products</button>
        <button onClick={() => changePage('cart')}>Cart</button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;

