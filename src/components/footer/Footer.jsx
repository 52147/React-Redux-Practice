import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem quis mauris vehicula ultricies vitae ac lectus.</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123 456789</p>
        </div>
      </div>
    </footer>
  );
};

