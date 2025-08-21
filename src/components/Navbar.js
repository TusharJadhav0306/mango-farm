import React from 'react';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>🥭 Mango Farm</span>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('about')} className="nav-link">About Us</a>
          <a onClick={() => scrollToSection('varieties')} className="nav-link">Mango Varieties</a>
          <a onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</a>
          <a onClick={() => scrollToSection('sponsor')} className="nav-link">Sponsor Us</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
