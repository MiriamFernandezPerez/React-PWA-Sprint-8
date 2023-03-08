import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PilotsInfo from './PilotsInfo';

const Pilots = () => {

  const [urlPilots, setUrlPilots] = useState([]);
  const [pilots, setPilots] = useState([]);
      
  const thisUrl = window.location.href;
  const id = thisUrl.split("/")[4];
    
  //Llamo a la API por ID y rescato las URL de los pilotos
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}`)
      .then(res => {
        setUrlPilots(res.data.pilots);
      })
   }, [])

  console.log(urlPilots);
    
  let idUrl = [];

  idUrl = urlPilots.map(url => {
    const id = url.split('/')[5];
    console.log(id);
    return id;
  })

  console.log(idUrl);
    
  useEffect(() => {
    for (let id of idUrl) {
      setPilots([])
      axios.get(`https://swapi.dev/api/people/${id}`).then(res => {
        console.log(res)
        setPilots(previous => {
          return [...previous, res.data]
        })
      })
    }
  }, [])

   

   return(
        <div className="App">
          {pilots.map((pilot, index) => {
            const idPilot = pilot.url.split('/')[5];
            console.log(idPilot);
            return <PilotsInfo
                  key={pilot.url} 
                  name={pilot.name}
                  url={`https://starwars-visualguide.com/assets/img/characters/${idPilot}.jpg`}
            ></PilotsInfo>
          })}
        </div>
    );
}

export default Pilots;
