import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarShipInfo from './StarShipInfo';

const StarShip = () => {

    const [starShip, setStarShip] = useState('');
    
    const thisUrl = window.location.href;
    const id = thisUrl.split("/")[4];
    
    //Llamo a la API por ID
    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res => {
                setStarShip(res.data);
            })
    }, [])
    
    const url = "https://starwars-visualguide.com/assets/img/starships/";
    const ext = id +".jpg";
    const urlImg = url + ext;
    const urlDefault = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
    
    //Compruebo si la URL devuelve imagen
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        try {
            fetch(urlImg)
            .then((res) =>{
                res.json();
                setIsLoaded(res.ok)
            })
        } catch (error) {
        }
    }, [])
    console.log(isLoaded);    
    
    return(
        <div className="App">
                <StarShipInfo 
                key={id} 
                name={starShip.name}
                url={isLoaded ? url + ext : urlDefault} 
                model={starShip.model} 
                shipclass={starShip.starship_class} 
                manufact={starShip.manufacturer} 
                cost={starShip.cost_in_credits} 
                crew={starShip.crew} 
                passenger={starShip.passengers} 
                cargo={starShip.cargo_capacity} 
                consumables={starShip.consumables} 
                length={starShip.length} 
                speed={starShip.max_atmosphering_speed} 
                rating={starShip.hyperdrive_rating} 
                maxspeed={starShip.MGLT}></StarShipInfo>
        </div>
    );
}

export default StarShip;