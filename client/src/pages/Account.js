import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567'
  });
  
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      isDefault: true
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm(profile);
  };

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm(profile);
  };

  return (
    <div className="account-page">
      <div className="account-header">
        <h1>My Account</h1>
        <p>Welcome back, {profile.firstName}!</p>
      </div>
      
      <div className="account-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`tab-btn ${activeTab === 'addresses' ? 'active' : ''}`}
          onClick={() => setActiveTab('addresses')}
        >
          Addresses
        </button>
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>
      
      <div className="account-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            {!isEditing ? (
              <>
                <div className="profile-info">
                  <div className="info-group">
                    <label>First Name</label>
                    <p>{profile.firstName}</p>
                  </div>
                  <div className="info-group">
                    <label>Last Name</label>
                    <p>{profile.lastName}</p>
                  </div>
                  <div className="info-group">
                    <label>Email</label>
                    <p>{profile.email}</p>
                  </div>
                  <div className="info-group">
                    <label>Phone</label>
                    <p>{profile.phone}</p>
                  </div>
                </div>
                <button onClick={handleEdit} className="btn btn-primary">
                  Edit Profile
                </button>
              </>
            ) : (
              <div className="edit-profile">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    value={editForm.firstName}
                    onChange={(e) => setEditForm({...editForm, firstName: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={editForm.lastName}
                    onChange={(e) => setEditForm({...editForm, lastName: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                  />
                </div>
                <div className="edit-actions">
                  <button onClick={handleSave} className="btn btn-primary">Save</button>
                  <button onClick={handleCancel} className="btn">Cancel</button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'addresses' && (
          <div className="addresses-section">
            <h2>Saved Addresses</h2>
            <div className="addresses-grid">
              {addresses.map(address => (
                <div key={address.id} className="address-card">
                  <div className="address-header">
                    <h3>{address.type}</h3>
                    {address.isDefault && <span className="default-badge">Default</span>}
                  </div>
                  <p>{address.street}</p>
                  <p>{address.city}, {address.state} {address.zipCode}</p>
                  <div className="address-actions">
                    <button className="btn btn-small">Edit</button>
                    <button className="btn btn-small">Delete</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Add New Address</button>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="settings-section">
            <h2>Account Settings</h2>
            
            <div className="settings-group">
              <h3>Email Notifications</h3>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Order confirmations
              </label>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Shipping updates
              </label>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Promotional offers
              </label>
            </div>
            
            <div className="settings-group">
              <h3>Security</h3>
              <button className="btn">Change Password</button>
            </div>
            
            <div className="settings-group danger">
              <h3>Delete Account</h3>
              <p>Once you delete your account, there is no going back. Please be certain.</p>
              <button className="btn btn-danger">Delete Account</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;