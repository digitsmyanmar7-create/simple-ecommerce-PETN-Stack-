import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div className="order-confirmation">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been successfully placed.</p>
        {orderId && <p className="order-id">Order ID: #{orderId}</p>}
        <p>You will receive a confirmation email shortly.</p>
        <div className="confirmation-actions">
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;