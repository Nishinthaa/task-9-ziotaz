// src/pages/Cart.js
import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setCheckoutClicked(true);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping now!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${calculateTotal()}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}

      {checkoutClicked && (
        <div className="checkout-message">
          <h3>Thank you for your order!</h3>
          <p>Your order has been placed successfully. You will be redirected to the payment page shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;



