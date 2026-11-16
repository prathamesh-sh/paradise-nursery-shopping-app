import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h2 className="about-us-title">Welcome to Paradise Nursery</h2>
        <p className="about-us-tagline">Where Greenery Meets Serenity & Well-Being</p>
      </div>

      <div className="about-us-section">
        <h3 className="section-subtitle">Our Company & Story</h3>
        <p className="about-us-text">
          Founded with a deep passion for horticulture and sustainable living, Paradise Nursery is your premier online destination for handcrafted indoor and outdoor botanical beauties. We believe that bringing living greenery into our homes and workplaces enriches everyday life, purifies our air, and creates peaceful sanctuaries away from busy everyday routines.
        </p>
      </div>

      <div className="about-us-grid">
        <div className="about-card">
          <div className="card-icon">🌿</div>
          <h4>Our Mission</h4>
          <p>
            To empower individuals and communities to build greener, healthier living spaces by delivering premium, sustainably cultivated plants directly to your doorstep.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">🌱</div>
          <h4>Our Vision</h4>
          <p>
            To foster a worldwide connection with the botanical kingdom, inspiring environmental stewardship and promoting wellness through the natural elegance of plants.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">🏡</div>
          <h4>Indoor & Outdoor Plants</h4>
          <p>
            Whether purifying the air in your bedroom or creating a lush outdoor patio garden, our diverse collections thrive in every microclimate and personal space.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">⭐</div>
          <h4>Quality & Satisfaction</h4>
          <p>
            Every specimen is meticulously nurtured by certified horticulturists, inspected for optimum health, and backed by our 100% customer satisfaction guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
