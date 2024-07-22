import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 The BIM Draft. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
          <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
          <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
