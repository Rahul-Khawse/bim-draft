import React, { useState } from 'react';
import './App.css';

const ContactUs = () => {
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
    // Handle form submission (e.g., send data to server)
    console.log('Form data submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <i className="fa fa-envelope"></i>
            <a href="bimdraft@gmail.com">bimdraft@gmail.com</a>
          </div>
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <a href="tel:+91-12345-67890">(+91) 12345-67890</a>
          </div>
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <p>Gurgaon, Haryana, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;