import React from 'react';
import FooterStyle from './Footer.styles';
import SocialHeader from '../SocialHeader/SocialHeader';
import FooterList from '../FooterList/FooterList';

const Footer = () => {
  return (
    <FooterStyle className="container-fluid mt-5">
      <div className="row text-center">
        <div className="col-md-12">
            <h5 className="mt-3">More From StarWars:</h5>
            <ul className="text-center mt-4">
                <SocialHeader name="facebook" link="https://www.facebook.com/StarWars"><i className='fa-brands fa-facebook'></i></SocialHeader>
                <i className='fa-brands fa-instagram'><SocialHeader name="instagram" link="https://www.instagram.com/starwars/"></SocialHeader></i>
                <i className='fa-brands fa-youtube'><SocialHeader name="youtube" link="https://www.youtube.com/user/starwars"></SocialHeader></i>
                <i className='fa-brands fa-twitter'><SocialHeader name="twitter" link="https://twitter.com/starwars"></SocialHeader></i>
            </ul>
            <h5 className="mt-5">TM & © Lucasfilm Ltd. All Rights Reserved</h5>
            <ul className="text-center mt-5">
                <FooterList name="terms" link="http://disneytermsofuse.com/" text="Terms of use"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="information" link="https://support.disney.com/hc/en-us/articles/360000829466-Legal-Notices" text="Additional Content Information"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="privacy" link="http://disneyprivacycenter.com/" text="Privacy Policy"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="childrenPrivacy" link="https://disneyprivacycenter.com/kids-privacy-policy/english/" text="Children's Online Privacy Policy"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="childrenOnlinePrivacy" link="https://disneyprivacycenter.com/kids-privacy-policy/english/" text="Children's Online Privacy Policy"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="californiaPrivacy" link="https://disneyprivacycenter.com/notice-to-california-residents/" text="Your California Privacy Rights"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="shopDisney" link="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store" text="Star Wars at shopDisney"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="helpdesk" link="https://support.starwars.com/" text="Star Wars Helpdesk"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="ads" link="http://preferences-mgr.truste.com/?type=starwars&affiliateId=115" text="Interest-Based Ads"></FooterList>
                <FooterList text="|"></FooterList>
                <FooterList name="personalInfo" link="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d" text="Do Not Sell My Personal Information"></FooterList>
            </ul>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer;