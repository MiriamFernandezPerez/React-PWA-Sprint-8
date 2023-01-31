import React from 'react';
import HeaderStyle from './Header.styles';
import starwars from '../../starwars.svg';
import LogMenu from '../LogMenu/LogMenu';
import SocialHeader from '../SocialHeader/SocialHeader';

const Header = () => {
  return (
    <HeaderStyle className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-4">
          <ul className="text-center">
            <i className='fa-brands fa-facebook'><SocialHeader name="facebook" link="https://www.facebook.com/StarWars"></SocialHeader></i>
            <i className='fa-brands fa-instagram'><SocialHeader name="instagram" link="https://www.instagram.com/starwars/"></SocialHeader></i>
            <i className='fa-brands fa-youtube'><SocialHeader name="youtube" link="https://www.youtube.com/user/starwars"></SocialHeader></i>
            <i className='fa-brands fa-twitter'><SocialHeader name="twitter" link="https://twitter.com/starwars"></SocialHeader></i>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src={starwars} className="logo" alt="logo starwars" />
        </div>
        <div className="col-md-4">
          <ul className="text-center">
            <LogMenu name="Login" text="Login" link="#"></LogMenu>
            <LogMenu name="|" text="|" link="#"></LogMenu>
            <LogMenu name="SingUp" text="SingUp" link="#"></LogMenu>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header;

