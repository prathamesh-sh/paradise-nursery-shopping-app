import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.numOfItems);
  const dispatch = useDispatch();

  // Parse numerical cost from string like "$15"
  const parseCost = (costStr) => {
    if (typeof costStr === 'number') return costStr;
    const num = parseFloat(String(costStr).replace('$', '').trim());
    return isNaN(num) ? 0 : num;
  };

  // Calculate overall cart total
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseCost(item.cost) * item.quantity;
    });
    return total;
  };

  // Calculate individual plant item subtotal
  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      quantity: item.quantity + 1,
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem({ name: item.name }));
    } else {
      dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  const handleContinue = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) onContinueShopping();
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container empty-cart-container">
        <div className="empty-cart-card">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any lovely plants to your cart yet.</p>
          <button className="continue-shopping-btn" onClick={handleContinue}>
            Explore Plants & Start Shopping
          </button>
        </div>
      </div>
    );
  }

  const grandTotal = calculateTotalAmount();

  return (
    <div className="cart-container">
      <div className="cart-header-summary">
        <h1 className="cart-page-title">Your Botanical Shopping Cart</h1>
        <div className="summary-banner">
          <span className="summary-items-count">Total Items: <strong>{totalQuantity}</strong></span>
          <span className="summary-total-price">Total Cart Amount: <strong>${grandTotal}</strong></span>
        </div>
      </div>

      <div className="cart-items-list">
        {cart.map(item => (
          <div className="cart-item-card" key={item.name}>
            <div className="cart-item-image-wrap">
              <img src={item.image} alt={item.name} className="cart-item-img" />
            </div>

            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.name}</h3>
              <p className="cart-item-unit-cost">Unit Price: <strong>{item.cost}</strong></p>
              
              <div className="cart-quantity-controls">
                <button
                  className="qty-btn dec-btn"
                  onClick={() => handleDecrement(item)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn inc-btn"
                  onClick={() => handleIncrement(item)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div className="cart-item-subtotal">
                Subtotal: <strong>${calculateTotalCost(item)}</strong>
              </div>

              <button
                className="delete-item-btn"
                onClick={() => handleRemove(item)}
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions-footer">
        <div className="total-due-box">
          <span className="total-due-label">Grand Total:</span>
          <span className="total-due-amount">${grandTotal}</span>
        </div>

        <div className="footer-buttons-group">
          <button className="continue-shopping-btn" onClick={handleContinue}>
            ← Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
