import React from 'react';
import CardShipStyle from './CardShip.styles';

const CardShip = (props) => {
  return (
    <CardShipStyle>
        <h4>{props.name}</h4>
        <h5>{props.model}</h5>
    </CardShipStyle>
  )
}

export default CardShip;



