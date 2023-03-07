import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ListShips from './pages/ListShips';
import StarShip from './components/StarShip/StarShip';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import { useContext, AuthContext } from 'react';

function App() {

  // const [isAutheticated, setisAutheticated] = useState(false);
  // const { usuario } = useContext(AuthContext);

  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<GuardedRoute />}>
            <Route path="/ListShips" element={<ListShips />} />
            <Route path="ListShips/:idShip" element={<StarShip />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;