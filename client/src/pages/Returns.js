import React from 'react';
import { Link } from 'react-router-dom';
import './Returns.css';

const Returns = () => {
  return (
    <div className="returns-page">
      <div className="returns-header">
        <h1>Returns & Refunds Policy</h1>
        <p>Last updated: March 1, 2024</p>
      </div>
      
      <div className="returns-content">
        <section className="policy-section">
          <h2>30-Day Return Policy</h2>
          <p>
            We want you to be completely satisfied with your purchase. If you're not happy 
            with your order, you can return most items within 30 days of delivery for a 
            full refund or exchange.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Return Conditions</h2>
          <p>To be eligible for a return, your item must be:</p>
          <ul>
            <li>Unused and in the same condition that you received it</li>
            <li>In the original packaging</li>
            <li>Accompanied by proof of purchase (order number)</li>
          </ul>
          <p className="note">
            <strong>Note:</strong> Some items cannot be returned, including:
          </p>
          <ul>
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Personal care items (if opened)</li>
            <li>Final sale items (marked as such)</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>How to Return an Item</h2>
          <ol className="steps-list">
            <li>
              <strong>Step 1:</strong> Log into your account and go to your Orders page
            </li>
            <li>
              <strong>Step 2:</strong> Find the order containing the item you want to return
            </li>
            <li>
              <strong>Step 3:</strong> Click on "Return Items" and follow the instructions
            </li>
            <li>
              <strong>Step 4:</strong> Print the return shipping label (if provided)
            </li>
            <li>
              <strong>Step 5:</strong> Pack the item securely and attach the shipping label
            </li>
            <li>
              <strong>Step 6:</strong> Drop off the package at any shipping carrier location
            </li>
          </ol>
        </section>
        
        <section className="policy-section">
          <h2>Refund Processing</h2>
          <p>Once we receive your return:</p>
          <ul>
            <li>We will inspect the item within 2-3 business days</li>
            <li>Approved refunds will be processed within 5-7 business days</li>
            <li>Refunds will be issued to your original payment method</li>
            <li>You will receive an email confirmation when your refund is processed</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>Exchanges</h2>
          <p>
            If you need to exchange an item for a different size or color, the fastest way 
            is to return the original item and place a new order for the desired item. 
            This ensures you get the new item as quickly as possible.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Shipping Costs for Returns</h2>
          <p>
            Return shipping costs are the responsibility of the customer, unless:
          </p>
          <ul>
            <li>You received a damaged or defective item</li>
            <li>You received the wrong item</li>
            <li>The item was lost in transit</li>
          </ul>
          <p>
            In these cases, we will provide a prepaid return shipping label and refund 
            the full cost of your purchase including original shipping.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our return policy or need assistance with a return, 
            please contact our customer service team:
          </p>
          <ul className="contact-list">
            <li>Email: returns@simpleshop.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Live Chat: Available 24/7</li>
          </ul>
        </section>
      </div>
      
      <div className="returns-footer">
        <Link to="/contact" className="btn btn-primary">Contact Support</Link>
        <Link to="/faq" className="btn">Visit FAQ</Link>
      </div>
    </div>
  );
};

export default Returns;