import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>123 Shopping Street</p>
            <p>Commerce City, CC 12345</p>
          </div>
          
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri, 9am-6pm</p>
          </div>
          
          <div className="info-card">
            <h3>✉️ Email</h3>
            <p>support@simpleshop.com</p>
            <p>info@simpleshop.com</p>
          </div>
          
          <div className="info-card">
            <h3>🕒 Business Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully. We'll get back to you soon!</p>
              <button onClick={() => setSubmitted(false)} className="btn btn-primary">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
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
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          {/* In a real app, you'd embed a Google Map here */}
          <div className="mock-map">
            <p>📍 SimpleShop Headquarters</p>
            <p>123 Shopping Street, Commerce City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;