import React from 'react';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import './App.css';
import aboutImage from './aboutImage.jpeg';
import projectImage1 from './projectImage1.jpeg'; 
import projectImage3 from './projectImage3.jpeg';
import ContactUs from './ContactUs';
import Footer from './Footer';

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
            <p>BIMDraft is a forward-thinking startup specializing in Building Information Modeling (BIM) 
            services and CAD drafting. Our team is dedicated to providing innovative solutions that 
            streamline project workflows and enhance the precision and efficiency of architectural and 
            engineering designs.
            <br />
            At BIMDraft, we leverage cutting-edge technology and industry best practices to deliver 
            exceptional BIM and CAD drafting services. Our mission is to drive progress and innovation 
            in the construction and design industry, ensuring our clients receive the highest quality 
            support for their projects.</p>
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
            <h3>Architecture</h3>
            <p>We provide comprehensive architectural design services that blend creativity and technical expertise. Our team of experienced architects works closely with clients to develop innovative solutions that meet their specific needs.</p>          
          </div>
          <div className="feature">
            <h3>Structure</h3>
            <p>Our structural engineering services ensure stability and durability for your buildings. We analyze, design, plan, and research structural components and systems to achieve design goals and ensure the safety and comfort of users or occupants.</p>          
          </div>
          <div className="feature">
            <h3>CAD Drafting</h3>
            <p>Professional CAD drafting services for all your design needs. Our team uses the latest CAD software to produce accurate and detailed drawings for architectural, structural, and MEP projects.</p>
          </div>
          <div className="feature">
            <h3>Coordination</h3>
            <p>Efficient coordination of all project elements to ensure seamless integration. Our coordination services include managing the interaction between different trades and disciplines, resolving conflicts, and ensuring that all components of the project work together harmoniously.</p>
          </div>
          <div className="feature">
            <h3>Take-off</h3>
            <p>Accurate material take-off services for project planning and cost estimation. Our detailed take-off services help you quantify the materials needed for your project, providing a solid foundation for budgeting and procurement.</p>
          </div>
          <div className="feature">
            <h3>MEP</h3>
            <p>Comprehensive MEP (Mechanical, Electrical, and Plumbing) services to ensure the functionality and safety of your building systems. Our MEP engineers design and implement efficient and effective systems that meet all regulatory requirements and client specifications.</p>
          </div>
        </div>
      </Element>

      <Element name="our-work" className="section our-work-section">
        <h2>Our Work</h2>
        <p>At BIM Draft, we're transforming construction with advanced BIM technologies. 
        Our passionate team of architects, engineers, and developers is dedicated to optimizing every phase of your project—from design to maintenance. 
        We empower clients with efficiency, cost savings, and sustainability through tailored consulting, software solutions, and collaborative training. 
        Join us in shaping the future of construction—build smarter, greener, and more resilient structures with BIM Draft.</p>
        <div className="projects-grid">
          <div className="project-card">
            <img src={projectImage1} alt="Project 1" />
            <h3>BIM SERVICES</h3>
            <p>At BIM Draft, we leverage advanced BIM capabilities to innovate design and automate processes.
            Our tech-savvy BIM teams partner with you to overcome building design and construction challenges, 
            boosting AEC industry productivity.</p>
          </div>
          <div className="project-card">
            <img src={projectImage3} alt="Project 3" />
            <h3>CAD SERVICES</h3>
            <p>We provide end-to-end services, from 2D & 3D CAD drafting to VDC consulting.
            Our experts partner with architects, engineers, contractors, and manufacturers to apply 
            advanced methodologies and improve project results.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </Element>

      <Element name="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <button>Get In Touch</button>
      </Element>


      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;
