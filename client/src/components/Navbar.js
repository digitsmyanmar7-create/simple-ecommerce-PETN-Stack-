import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Ko Nay Win | Shop
        </Link>
        
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>Products</Link>
          </li>
          
          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Info ▾
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li><Link to="/about" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>Contact Us</Link></li>
              <li><Link to="/faq" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>FAQ</Link></li>
              <li><Link to="/shipping" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>Shipping Info</Link></li>
              <li><Link to="/returns" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>Returns Policy</Link></li>
            </ul>
          </li>
          
          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Account ▾
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li><Link to="/account" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>My Account</Link></li>
              <li><Link to="/orders" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>My Orders</Link></li>
              <li><Link to="/wishlist" onClick={() => {setIsMenuOpen(false); setIsDropdownOpen(false);}}>Wishlist</Link></li>
            </ul>
          </li>
          
          <li className="nav-item">
            <Link to="/cart" className="nav-link cart-link" onClick={() => setIsMenuOpen(false)}>
              Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;