import React from 'react';
import LogMenuStyle from './LogMenu.styles';

const LogMenu = (props) => {
  return (
    <LogMenuStyle name={props.name} onClick={props.onClick}><a href={props.link}>{props.text}</a></LogMenuStyle>
  )
}

export default LogMenu