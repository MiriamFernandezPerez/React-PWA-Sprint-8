import React from 'react';
import FooterListStyle from './FooterList.styles';

const SocialHeader = (props) => {
  return (
    <FooterListStyle name={props.name}><a href={props.link}>{props.text}</a></FooterListStyle>
  )
}

export default SocialHeader