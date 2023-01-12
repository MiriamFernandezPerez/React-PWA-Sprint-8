import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import CardShip from './components/CardShip/CardShip';

function App() {

  const [starShips, setStarShips] = useState('');

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(res => {
        setStarShips(res.data.results);
      })
  }, [])


  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      {starShips.map((starShip) => {
        return <CardShip key={starShip.url} name={starShip.name} model={starShip.model}></CardShip>
      })}
    </div>
  );
}

export default App;

