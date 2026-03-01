import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
  const { addToCart } = useContext(CartContext);
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      inStock: true
    },
    {
      id: 2,
      name: 'Leather Wallet',
      price: 29.99,
      image_url: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
      inStock: true
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 199.99,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      inStock: false
    }
  ]);

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const moveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-empty">
        <h2>Your wishlist is empty</h2>
        <p>Save items you love to your wishlist and shop them later!</p>
        <Link to="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <p>You have {wishlistItems.length} items in your wishlist</p>
      </div>
      
      <div className="wishlist-grid">
        {wishlistItems.map(item => (
          <div key={item.id} className="wishlist-card">
            <div className="wishlist-image">
              <img src={item.image_url} alt={item.name} />
              <button 
                className="remove-btn"
                onClick={() => removeFromWishlist(item.id)}
                title="Remove from wishlist"
              >
                ×
              </button>
            </div>
            
            <div className="wishlist-details">
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              
              <div className="stock-status">
                {item.inStock ? (
                  <span className="in-stock">✓ In Stock</span>
                ) : (
                  <span className="out-of-stock">Out of Stock</span>
                )}
              </div>
              
              <div className="wishlist-actions">
                {item.inStock ? (
                  <button 
                    onClick={() => moveToCart(item)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="btn" disabled>Out of Stock</button>
                )}
                
                <Link to={`/product/${item.id}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="wishlist-footer">
        <Link to="/products" className="continue-shopping">
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;