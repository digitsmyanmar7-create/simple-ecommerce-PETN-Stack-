import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About SimpleShop</h1>
        <p>Your trusted online shopping destination since 2024</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            SimpleShop was founded with a simple mission: to make online shopping 
            easy, enjoyable, and accessible for everyone. What started as a small 
            project has grown into a comprehensive e-commerce platform serving 
            thousands of satisfied customers.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to provide high-quality products at competitive prices, 
            exceptional customer service, and a seamless shopping experience. 
            We believe that shopping should be simple, which is why we've created 
            an intuitive platform that makes finding and purchasing products a breeze.
          </p>
        </section>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>10,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Products</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Categories</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
        
        <section className="about-section values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality</h3>
              <p>We never compromise on product quality</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Honest and transparent business practices</p>
            </div>
            <div className="value-item">
              <h3>Customer First</h3>
              <p>Your satisfaction is our top priority</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Constantly improving our service</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;