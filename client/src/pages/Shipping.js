import React from 'react';
import './Shipping.css';

const Shipping = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-header">
        <h1>Shipping Information</h1>
        <p>Everything you need to know about delivery</p>
      </div>
      
      <div className="shipping-content">
        <section className="shipping-section">
          <h2>Delivery Options</h2>
          <div className="shipping-options">
            <div className="shipping-card">
              <h3>Standard Shipping</h3>
              <p className="price">$4.99</p>
              <p className="time">3-5 Business Days</p>
              <p className="description">Free on orders over $50</p>
            </div>
            
            <div className="shipping-card">
              <h3>Express Shipping</h3>
              <p className="price">$12.99</p>
              <p className="time">1-2 Business Days</p>
              <p className="description">Tracked delivery</p>
            </div>
            
            <div className="shipping-card">
              <h3>Next Day Delivery</h3>
              <p className="price">$24.99</p>
              <p className="time">Next Business Day</p>
              <p className="description">Order before 2 PM EST</p>
            </div>
          </div>
        </section>
        
        <section className="shipping-section">
          <h2>Shipping Zones</h2>
          <div className="zones-grid">
            <div className="zone-item">
              <h3>United States</h3>
              <ul>
                <li>All 50 states</li>
                <li>Puerto Rico</li>
                <li>US Virgin Islands</li>
              </ul>
            </div>
            
            <div className="zone-item">
              <h3>Military Addresses</h3>
              <ul>
                <li>APO/FPO addresses</li>
                <li>DPO addresses</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="shipping-section">
          <h2>Order Processing</h2>
          <div className="processing-info">
            <div className="info-item">
              <span className="label">Processing Time:</span>
              <span className="value">1-2 business days</span>
            </div>
            <div className="info-item">
              <span className="label">Order Cutoff Time:</span>
              <span className="value">2:00 PM EST (for same-day processing)</span>
            </div>
            <div className="info-item">
              <span className="label">Weekend Orders:</span>
              <span className="value">Processed on Monday</span>
            </div>
            <div className="info-item">
              <span className="label">Holiday Schedule:</span>
              <span className="value">No processing on major holidays</span>
            </div>
          </div>
        </section>
        
        <section className="shipping-section">
          <h2>Tracking Your Order</h2>
          <p>
            Once your order ships, you will receive a shipping confirmation email with 
            tracking information. You can also track your order by:
          </p>
          <ul>
            <li>Logging into your account and viewing order details</li>
            <li>Clicking the tracking link in your shipping confirmation email</li>
            <li>Using the tracking number on our carrier's website</li>
          </ul>
        </section>
        
        <section className="shipping-section">
          <h2>Shipping Restrictions</h2>
          <p>Please note the following shipping restrictions:</p>
          <ul>
            <li>PO Boxes: Express shipping not available</li>
            <li>Alaska/Hawaii: May incur additional shipping charges</li>
            <li>Hazardous materials: Some items cannot be shipped via air</li>
            <li>Age-restricted items: Adult signature required</li>
          </ul>
        </section>
        
        <section className="shipping-section">
          <h2>International Shipping</h2>
          <p className="coming-soon">🌎 International shipping coming soon!</p>
          <p>
            We're working on expanding our shipping options to serve customers worldwide. 
            Sign up for our newsletter to be notified when international shipping becomes available.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Shipping;