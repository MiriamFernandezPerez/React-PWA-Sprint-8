import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarShipInfo from './StarShipInfo';

const StarShip = () => {

    const [starShip, setStarShip] = useState('');
    
    const thisUrl = window.location.href;
    const id = thisUrl.split("/")[4];
    console.log(id)

    useEffect(() => {
        console.log(`https://swapi.dev/api/starships/${id}`);
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res => {
                setStarShip(res.data);
            })
    }, [])
    console.log(starShip);
    const url = "https://starwars-visualguide.com/assets/img/starships/";
    const ext = ".jpg";
                
    return(
        <div className="App">
                <StarShipInfo key={id} name={starShip.name} url={url + id + ext} model={starShip.model} shipclass={starShip.starship_class} manufact={starShip.manufacturer} cost={starShip.cost_in_credits} crew={starShip.crew} passenger={starShip.passengers} cargo={starShip.cargo_capacity} consumables={starShip.consumables} lenght={starShip.lenght} speed={starShip.max_atmosphering_speed} rating={starShip.hyperdrive_rating} maxspeed={starShip.MGLT}></StarShipInfo>
        </div>
    );
}

export default StarShip;