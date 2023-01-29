import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Api = () => {
    const [starShips, setStarShips] = useState('');
    //Llamada a la API
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(res => {
                setStarShips(res.data.results);
            })
    }, [])
    console.log(starShips);
    return starShips;
}

export default Api;