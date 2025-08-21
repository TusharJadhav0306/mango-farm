import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (<section id="about" className="about-us">
        <div className="container">
            <h2 className="section-title">About Us</h2>
            <div className="about-content">
                <div className="about-text">
                    <h3>Our Story</h3>
                    <p>
                    Welcome to our family-owned mango farm, where passion meets tradition. Located in Irali, Sangli, Maharashtra, we have been cultivating the finest organic mangoes for over three generations.
                    </p>
                    <p>
                        Our farm spans across 50 acres of pristine land, blessed with rich soil 
                                      and perfect climate conditions that create the most flavorful and nutritious 
                                      mangoes you'll ever taste.
                    </p>

                    <h3>Our Values</h3>
                    <div className="values-grid">
                        <div className="value-item">
                            <span className="value-icon">🌱</span>
                            <h4>100% Organic</h4>
                            <p>No pesticides, no chemicals, just pure natural goodness</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">👨‍🌾</span>
                            <h4>Family Tradition</h4>
                            <p>Three generations of farming expertise and love</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">🌍</span>
                            <h4>Sustainable</h4>
                            <p>Eco-friendly practices that protect our environment</p>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <div className="image-placeholder">
                        <span>🏡</span>
                        <p>Our Farm</p>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default AboutUs;
