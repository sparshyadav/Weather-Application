import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityDetails from './components/CityDetails';
import './App.css';
import Home from './pages/Home';

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home cities={cities} />} />
          <Route path="/city/:city" element={<CityDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
