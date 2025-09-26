import React from 'react';
import './FoodTruckCard.css';

const FoodTruckCard = ({ truck }) => {
  const handleViewMenu = () => {
    alert(`Opening menu for ${truck.name}!`);
  };

  const handleFindLocation = () => {
    alert(`Finding location for ${truck.name}!`);
  };

  return (
    <div className="food-truck-card">
      <div className="card-image-container">
        <img 
          src={truck.image} 
          alt={truck.name}
          className="card-image"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x200/87ceeb/2c3e50?text=${encodeURIComponent(truck.name)}`;
          }}
        />
      </div>
      <div className="card-content">
        <h3 className="truck-name">{truck.name}</h3>
        <p className="truck-cuisine">{truck.cuisine}</p>
        <p className="truck-description">{truck.description}</p>
        <div className="card-buttons">
          <button 
            className="btn btn-primary" 
            onClick={handleViewMenu}
            aria-label={`View menu for ${truck.name}`}
          >
            View Menu
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleFindLocation}
            aria-label={`Find location for ${truck.name}`}
          >
            Find Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodTruckCard;
