import React from 'react';
import SocialHeaderStyle from './SocialHeader.styles';

const SocialHeader = (props) => {
  return (
    <SocialHeaderStyle name={props.name}><a href={props.link}></a></SocialHeaderStyle>
  )
}

export default SocialHeader;