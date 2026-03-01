import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('Product added to cart!');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-grid">
        <div className="product-image">
          <img src={product.image_url} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="category">Category: {product.category}</p>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p className="stock">Availability: {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          
          {product.stock > 0 && (
            <>
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
              
              <div className="product-actions">
                <button onClick={handleAddToCart} className="btn">Add to Cart</button>
                <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>
                <button onClick={() => navigate('/products')} className="btn btn-secondary">Continue Shopping</button>
                
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;