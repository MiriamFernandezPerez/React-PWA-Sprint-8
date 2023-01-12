import React from 'react';
import HeaderStyle from './Header.styles';
import starwars from '../../starwars.svg';
import LogMenu from '../LogMenu/LogMenu';

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={starwars} className="logo" alt="logo starwars" />
      </div>
      <div>
        <ul className="d-flex">
          <LogMenu name="Login" text="Login" link="#"></LogMenu>
          <LogMenu name="|" text="|" link="#"></LogMenu>
          <LogMenu name="SingUp" text="SingUp" link="#"></LogMenu>
        </ul>
      </div>
    </HeaderStyle>
  )
}

export default Header;

