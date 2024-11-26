// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import './App.css';

import laptopImage from './components/assets/laptop.jpg';
import TShirtImage from './components/assets/tshirt.jpg';
import SmartphoneImage from './components/assets/smartphone.jpg';
import jeansImage from './components/assets/jeans.jpg';
import headphonesImage from './components/assets/headphones.jpg';
import sneakersImage from './components/assets/sneakers.jpg';
import cameraImage from './components/assets/camera.jpg';
import jacketImage from './components/assets/jacket.jpg';

const App = () => {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = [
    { id: 1, name: 'Laptop', price: 50000, category: 'electronics', image: laptopImage },
    { id: 2, name: 'T-Shirt', price: 200, category: 'clothing', image: TShirtImage },
    { id: 3, name: 'Smartphone', price: 17000, category: 'electronics', image: SmartphoneImage },
    { id: 4, name: 'Jeans', price: 900, category: 'clothing', image: jeansImage },
    { id: 5, name: 'Headphones', price: 350, category: 'electronics', image: headphonesImage },
    { id: 6, name: 'Sneakers', price: 560, category: 'clothing', image: sneakersImage },
    { id: 7, name: 'Camera', price: 10000, category: 'electronics', image: cameraImage },
    { id: 8, name: 'Jacket', price: 800, category: 'clothing', image: jacketImage },
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (productId, increment) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity + increment, 1) }
          : item
      )
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPage('products');
  };


  
  const renderPage = () => {
    if (page === 'home')
      return <Home onShopNowClick={() => setPage('products')} handleCategoryClick={handleCategoryClick} />;
    if (page === 'products')
      return (
        <ProductList
          products={products}
          addToCart={addToCart}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
      );
    if (page === 'cart')
      return (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      );
  };

  return (
    <div className="app">
      <Navbar changePage={setPage} handleSearch={setSearchQuery} />
      {renderPage()}
    </div>
  );
};

export default App;



