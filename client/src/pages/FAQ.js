import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: 'Orders',
      questions: [
        {
          q: 'How do I place an order?',
          a: 'Simply browse our products, add items to your cart, and proceed to checkout. You\'ll need to provide your shipping information and complete the payment process.'
        },
        {
          q: 'Can I modify or cancel my order after placing it?',
          a: 'Orders can be modified or cancelled within 1 hour of placement. Please contact our customer support immediately if you need to make changes.'
        },
        {
          q: 'How will I know if my order is confirmed?',
          a: 'You will receive an email confirmation with your order details shortly after placing your order.'
        }
      ]
    },
    {
      category: 'Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days delivery.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Currently, we ship within the United States only. International shipping will be available soon.'
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you will receive a tracking number via email. You can also check your order status in your account.'
        }
      ]
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer 30-day returns for most items. Products must be unused and in original packaging.'
        },
        {
          q: 'How do I return an item?',
          a: 'Log into your account, go to Orders, select the item you want to return, and follow the return instructions.'
        },
        {
          q: 'When will I receive my refund?',
          a: 'Refunds are processed within 5-7 business days after we receive and inspect your return.'
        }
      ]
    },
    {
      category: 'Payment',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.'
        },
        {
          q: 'Is it safe to use my credit card on your site?',
          a: 'Yes, we use industry-standard encryption and secure payment gateways to protect your information.'
        }
      ]
    },
    {
      category: 'Account',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click on "My Account" in the navigation menu and select "Create Account". Fill in your details to register.'
        },
        {
          q: 'I forgot my password. What should I do?',
          a: 'Click on "Forgot Password" on the login page and follow the instructions to reset your password.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products and services</p>
      </div>
      
      <div className="faq-search">
        <input 
          type="text" 
          placeholder="Search FAQs..." 
          className="search-input"
        />
      </div>
      
      <div className="faq-content">
        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h2>{category.category}</h2>
            <div className="faq-items">
              {category.questions.map((item, qIndex) => {
                const uniqueIndex = `${catIndex}-${qIndex}`;
                return (
                  <div key={qIndex} className="faq-item">
                    <div 
                      className="faq-question"
                      onClick={() => toggleItem(uniqueIndex)}
                    >
                      <h3>{item.q}</h3>
                      <span className={`arrow ${openItems[uniqueIndex] ? 'open' : ''}`}>
                        ▼
                      </span>
                    </div>
                    {openItems[uniqueIndex] && (
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="faq-footer">
        <h3>Still have questions?</h3>
        <p>Can't find the answer you're looking for? Please contact our support team.</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </div>
    </div>
  );
};

export default FAQ;