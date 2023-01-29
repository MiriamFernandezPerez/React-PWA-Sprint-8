import React from 'react';
import StarShipStyle from './StarShipInfo.styles';

const StarShipInfo = (props) => {


    return (
        <StarShipStyle>
    {/* https://starwars-visualguide.com/#/starships/9 */}
            <div className="container text-uppercase">
                <div className="row text-center mb-3">
                    <div className="col-sm-12">
                    <h2>{props.name}</h2>
                        <img className="img my-4" src={props.url} alt="StarShip photo" />
                        <h4>Model: <span>{props.model}</span></h4>
                        <h4>Starship Class: <span>{props.shipclass}</span></h4>
                        <h4>Manufacturer: <span>{props.manufact}</span></h4>
                        <h4>Cost: <span>{props.cost} credits</span></h4>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h5>Crew: <span>{props.crew}</span></h5>
                        <h5>Passenger Capacity: <span>{props.passenger}</span></h5>
                        <h5>Cargo Capacity: <span>{props.cargo} tons</span></h5>
                        <h5>Consumables: <span>{props.consumables}</span></h5>
                    </div>
                    <div className="col-md-6">
                        <h5>Length: <span>{props.length} metters</span></h5>
                        <h5>Maxium Athmosphering Speed: <span>{props.speed} hm/h</span></h5>
                        <h5>Hyperdriven Rating: <span>{props.rating}</span></h5>
                        <h5>Maximun Speed in RealSpace: <span>{props.maxspeed}MGLT</span></h5>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <h4>Pilots: <span></span>
                        </h4>
                        
                    </div>
                </div>
            </div>
        </StarShipStyle>
    )
}

export default StarShipInfo;

