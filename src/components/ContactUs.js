import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (<section id="contact" className="contact-us">
        <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
                Get in touch with us to learn more about our farm or arrange a visit
            </p>

            <div className="contact-content">
                <div className="contact-info">
                    <h3>Visit Our Farm</h3>
                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <div>
                            <h4>Address</h4>
                            <p>Gordwadi Road<br/>
                                Irali, Sangli 416405<br/>
                                Maharashtra, India</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <div>
                            <h4>Email</h4>
                            <p>mangoInfo@gmail.com</p>
                            <p>tusharjadhav6421@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 7666101442</p>
                            <p>+91 9999999999</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">🕒</span>
                        <div>
                            <h4>Farm Hours</h4>
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div className="contact-map">
                    <div className="map-placeholder">
                        <span className="map-emoji">🗺️</span>
                        <h3>Farm Location</h3>
                        <p>📍 17.04267, 74.96050</p>
                    </div>
                </div>
            </div>

            <div className="visit-info">
                <h3>Planning a Visit?</h3>
                <p>
                    We welcome visitors to our farm! Please call ahead to schedule your visit, 
                                especially during harvest season. We offer guided tours where you can learn 
                                about our farming practices and taste our delicious mangoes.
                </p>
                <div className="visit-tips">
                    <div className="tip">
                        <span>🌤️</span>
                        <p>Best time to visit: Early morning or late afternoon</p>
                    </div>
                    <div className="tip">
                        <span>👟</span>
                        <p>Wear comfortable walking shoes</p>
                    </div>
                    <div className="tip">
                        <span>📸</span>
                        <p>Photography is welcome</p>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default ContactUs;
