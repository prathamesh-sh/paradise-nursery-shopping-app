import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import './App.css';

function AppContent() {
  const [view, setView] = useState('landing');

  const handleGetStarted = () => {
    setView('products');
  };

  const handleNavigateHome = () => {
    setView('landing');
  };

  if (view === 'products') {
    return <ProductList onNavigateHome={handleNavigateHome} />;
  }

  return (
    <div className="app-container">
      <div className="landing-page">
        <div className="landing-content-wrapper">
          <div className="hero-box">
            <div className="brand-badge">🌿 Paradise Nursery</div>
            <h1 className="company-title">Paradise Nursery</h1>
            <p className="company-tagline">Where Green Meets Serenity</p>
            <p className="company-intro">
              Your premier online destination for hand-selected, sustainably grown
              indoor and outdoor botanical beauties. Transform your living space
              into a lush green sanctuary.
            </p>
            <button className="get-started-button" onClick={handleGetStarted}>
              Get Started →
            </button>
          </div>

          <AboutUs />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
