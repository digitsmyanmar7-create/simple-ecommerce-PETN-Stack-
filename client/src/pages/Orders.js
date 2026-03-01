import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock data for demonstration
  useEffect(() => {
    // In a real app, you would fetch from your API
    const mockOrders = [
      {
        id: 1,
        date: '2024-02-15',
        total: 129.99,
        status: 'Delivered',
        items: [
          { name: 'Wireless Headphones', quantity: 1, price: 99.99 },
          { name: 'Coffee Mug', quantity: 2, price: 15.00 }
        ]
      },
      {
        id: 2,
        date: '2024-02-10',
        total: 79.98,
        status: 'Shipped',
        items: [
          { name: 'Cotton T-Shirt', quantity: 2, price: 39.99 }
        ]
      },
      {
        id: 3,
        date: '2024-02-01',
        total: 199.99,
        status: 'Processing',
        items: [
          { name: 'Smart Watch', quantity: 1, price: 199.99 }
        ]
      }
    ];
    
    setOrders(mockOrders);
    setLoading(false);
  }, []);

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'delivered': return 'status-delivered';
      case 'shipped': return 'status-shipped';
      case 'processing': return 'status-processing';
      default: return '';
    }
  };

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>My Orders</h1>
        <p>View and track your order history</p>
      </div>
      
      {orders.length === 0 ? (
        <div className="no-orders">
          <h2>No orders yet</h2>
          <p>Looks like you haven't placed any orders yet.</p>
          <Link to="/products" className="btn btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3>Order #{order.id}</h3>
                  <p className="order-date">Placed on {order.date}</p>
                </div>
                <div className="order-status">
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">x{item.quantity}</span>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="order-footer">
                <div className="order-total">
                  <strong>Total: ${order.total.toFixed(2)}</strong>
                </div>
                <div className="order-actions">
                  <button 
                    className="btn btn-small"
                    onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                  >
                    {selectedOrder === order.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button className="btn btn-small">Track Order</button>
                  <button className="btn btn-small">Buy Again</button>
                </div>
              </div>
              
              {selectedOrder === order.id && (
                <div className="order-details">
                  <h4>Order Details</h4>
                  <div className="details-grid">
                    <div className="detail-row">
                      <span>Order Date:</span>
                      <span>{order.date}</span>
                    </div>
                    <div className="detail-row">
                      <span>Payment Method:</span>
                      <span>Credit Card (**** **** **** 1234)</span>
                    </div>
                    <div className="detail-row">
                      <span>Shipping Address:</span>
                      <span>123 Main St, Anytown, CA 12345</span>
                    </div>
                    <div className="detail-row">
                      <span>Tracking Number:</span>
                      <span>1Z999AA10123456784</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;