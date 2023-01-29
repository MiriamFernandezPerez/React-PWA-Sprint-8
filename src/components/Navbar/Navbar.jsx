import React from 'react';
import NavbarStyle from './Navbar.styles';
import LogMenuStyle from '../LogMenu/LogMenu.styles';

const Navbar = () => {
  return (
    <NavbarStyle className="nav flex-wrap">  
        <LogMenuStyle className="list-group-item mx-3"><a href="/">Home</a></LogMenuStyle>
        <LogMenuStyle className="list-group-item mx-3"><a href="/ListShips">StarShips</a></LogMenuStyle>
    </NavbarStyle>
  )
}

export default Navbar;
