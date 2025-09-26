import React from 'react';
import './App.css';
import Header from './components/Header';
import FoodTruckGrid from './components/FoodTruckGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <FoodTruckGrid />
      </main>
    </div>
  );
}

export default App;
