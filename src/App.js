import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ListShips from './pages/ListShips';
import StarShip from './components/StarShip/StarShip';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListShips" element={<ListShips />} />
          <Route path="ListShips/:idShip" element={<StarShip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

