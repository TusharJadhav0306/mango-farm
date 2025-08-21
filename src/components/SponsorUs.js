import React, { useState } from 'react';
import './SponsorUs.css';

const SponsorUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="sponsor" className="sponsor-us">
      <div className="container">
        <h2 className="section-title">Sponsor Our Farm</h2>
        <div className="sponsor-content">
          <div className="sponsor-info">
            <h3>Why Sponsor Us?</h3>
            <p>
              By sponsoring our mango farm, you're supporting sustainable agriculture, 
              local farming communities, and the preservation of traditional farming methods. 
              Your sponsorship helps us:
            </p>
            <ul className="sponsor-benefits">
              <li>🌱 Maintain organic farming practices</li>
              <li>👨‍🌾 Support local farm workers and their families</li>
              <li>🌍 Contribute to environmental sustainability</li>
              <li>🏛️ Preserve agricultural heritage and knowledge</li>
              <li>📚 Educate future generations about farming</li>
            </ul>
            
            <h3>Sponsorship Levels</h3>
            <div className="sponsorship-levels">
              <div className="level">
                <h4>🌱 Seed Sponsor</h4>
                <p>Support individual trees and receive updates on their growth</p>
              </div>
              <div className="level">
                <h4>🌳 Grove Sponsor</h4>
                <p>Adopt a section of our orchard and get seasonal harvest updates</p>
              </div>
              <div className="level">
                <h4>🏡 Farm Partner</h4>
                <p>Become a key partner in our sustainable farming mission</p>
              </div>
            </div>
          </div>
          
          <div className="sponsor-form">
            <h3>Get in Touch</h3>
            <p>Interested in sponsoring? Send us a message and we'll discuss opportunities!</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="Tell us about your interest in sponsoring our farm..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorUs;
