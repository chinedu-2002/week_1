import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="awning"></div>
      <h1 className="header-title">Food Truck Favorites</h1>
      <p className="header-subtitle">Discover amazing food trucks in your community</p>
    </header>
  );
};

export default Header;
