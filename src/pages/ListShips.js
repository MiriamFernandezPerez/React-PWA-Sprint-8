import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardShip from '../components/CardShip/CardShip';
import { Link, useParams } from "react-router-dom";


const ListShips = () => {

    const [starShips, setStarShips] = useState('');
    // const { id } = useParams();
    // console.log(id);
    //Llamada a la API
    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/`)
            .then(res => {
                setStarShips(res.data.results);
            })
    }, [])

    console.log(starShips);
    return (
        <div className="App">
            {starShips.map((starShip) => {
                const idShip = starShip.url.split("/")[5];
                //console.log(idShip);
                console.log(starShip.url);
                return <Link to={`/ListShips/${idShip}`}><CardShip key={starShip.url} name={starShip.name} model={starShip.model}></CardShip></Link>
            })}
        </div>
    );
}

export default ListShips;