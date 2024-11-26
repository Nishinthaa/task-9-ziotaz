import React, { useState } from 'react';

const Navbar = ({ changePage, handleSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => changePage('home')}>
        E-Commerce
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => changePage('home')}>Home</button>
        <button onClick={() => changePage('products')}>Products</button>
        <button onClick={() => changePage('cart')}>Cart</button>
      </div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;





