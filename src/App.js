import React from 'react';
import Navbar from './Navbar';
import { Link, Element } from 'react-scroll';
import './App.css';
import aboutImage from './aboutImage.jpeg'; // Ensure you have this image in the src directory


function App() {
  return (
    <div>
      <Navbar />

      <Element name="home" className="section home-section">
        <h1>Welcome to Our Startup</h1>
        <p>Introductory content goes here.</p>
      </Element>

      <Element name="about" className="section about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>We are a startup focused on creating innovative solutions to modern problems. 
            Our team is dedicated to providing the best services and products to our clients. 
            Our mission is to drive progress and innovation in our industry.</p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
        </div>
      </Element>

      <Element name="features" className="section features-section">
        <h2>Explore Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>The BIM Engineers</h3>
            <p>BIM (Building Information Modeling) Engineers focus on creating digital representations of physical and functional characteristics of places.</p>
          </div>
          <div className="feature">
            <h3>BIM / VDC</h3>
            <p>Building Information Modeling (BIM) / Virtual Design and Construction (VDC) optimize project design, construction, and lifecycle management.</p>
          </div>
          <div className="feature">
            <h3>Staffing</h3>
            <p>Staffing services provide skilled professionals for various roles, ensuring project efficiency and success.</p>
          </div>
          <div className="feature">
            <h3>STAFFING / SECONDMENT</h3>
            <p>Staffing and secondment involve providing temporary workforce solutions tailored to project needs.</p>
          </div>
          <div className="feature">
            <h3>CAD Drafting</h3>
            <p>CAD (Computer-Aided Design) Drafting services transform ideas into detailed technical drawings.</p>
          </div>
          <div className="feature">
            <h3>Quantity Surveying</h3>
            <p>Quantity Surveying manages project costs and ensures efficient resource allocation.</p>
          </div>
        </div>
      </Element>

      <Element name="our-work" className="section">
        <h2>Our Work</h2>
        <p>Details about projects and achievements.</p>
      </Element>

      <Element name="contact" className="section">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </Element>
    </div>
  );
}

export default App;
