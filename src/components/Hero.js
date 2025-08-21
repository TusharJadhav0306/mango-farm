import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Fresh Organic Mangoes</h1>
          <p className="hero-subtitle">From our family farm to your heart</p>
          <button 
            className="hero-cta"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
