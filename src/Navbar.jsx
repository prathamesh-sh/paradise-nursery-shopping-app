import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar({ onNavigate, currentView }) {
  const totalQuantity = useSelector(state => state.cart.numOfItems);

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('landing')}>
        <span className="navbar-logo">🌿</span>
        <div className="brand-text">
          <span className="brand-name">Paradise Nursery</span>
          <span className="brand-sub">Where Green Meets Serenity</span>
        </div>
      </div>

      <div className="navbar-links">
        <button
          className={`nav-btn ${currentView === 'landing' ? 'active' : ''}`}
          onClick={() => onNavigate('landing')}
        >
          Home
        </button>
        <button
          className={`nav-btn ${currentView === 'products' ? 'active' : ''}`}
          onClick={() => onNavigate('products')}
        >
          Plants
        </button>
        <button
          className={`nav-btn cart-nav-btn ${currentView === 'cart' ? 'active' : ''}`}
          onClick={() => onNavigate('cart')}
          aria-label="Shopping Cart"
        >
          <span className="cart-icon">🛒</span>
          <span className="cart-label">Cart</span>
          <span className="cart-badge">{totalQuantity}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
