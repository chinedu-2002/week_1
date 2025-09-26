import React from 'react';
import FoodTruckCard from './FoodTruckCard';
import './FoodTruckGrid.css';

const FoodTruckGrid = () => {
  const foodTrucks = [
    {
      id: 1,
      name: "Birria-Landia",
      cuisine: "Mexican",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Authentic Mexican birria tacos and quesadillas"
    },
    {
      id: 2,
      name: "Mysttik Masala",
      cuisine: "Indian",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Flavorful Indian street food and curries"
    },
    {
      id: 3,
      name: "The Halal Guys",
      cuisine: "Middle Eastern",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Famous halal platters and wraps"
    },
    {
      id: 4,
      name: "Seoul Kitchen",
      cuisine: "Korean",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Korean BBQ and kimchi specialties"
    },
    {
      id: 5,
      name: "Pasta La Vista",
      cuisine: "Italian",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Fresh pasta and wood-fired pizza"
    },
    {
      id: 6,
      name: "Dragon Bites",
      cuisine: "Chinese",
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Authentic Chinese dumplings and noodles"
    },
    {
      id: 7,
      name: "Bayou Bites",
      cuisine: "Cajun",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Spicy jambalaya and po'boy sandwiches"
    },
    {
      id: 8,
      name: "Sushi Wheels",
      cuisine: "Japanese",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Fresh sushi rolls and ramen bowls"
    },
    {
      id: 9,
      name: "Greek Street",
      cuisine: "Greek",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Mediterranean gyros and souvlaki"
    },
    {
      id: 10,
      name: "BBQ Beast",
      cuisine: "American BBQ",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Smoked brisket and pulled pork"
    },
    {
      id: 11,
      name: "Tropical Treats",
      cuisine: "Caribbean",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Jerk chicken and plantain dishes"
    },
    {
      id: 12,
      name: "Waffle Wanderer",
      cuisine: "Desserts",
      image: "https://images.unsplash.com/photo-1562376552-0d160dcb2b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Belgian waffles and sweet treats"
    }
  ];

  return (
    <div className="food-truck-grid">
      {foodTrucks.map(truck => (
        <FoodTruckCard key={truck.id} truck={truck} />
      ))}
    </div>
  );
};

export default FoodTruckGrid;
