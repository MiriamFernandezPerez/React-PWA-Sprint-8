import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmsInfo from './FilmsInfo';

const Films = () => {

  const [urlFilms, setUrlFilms] = useState([]);
  const [films, setFilms] = useState([]);
      
  const thisUrl = window.location.href;
  const id = thisUrl.split("/")[4];
    
  //Llamo a la API por ID y rescato las URL de las películas
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}`)
      .then(res => {
        setUrlFilms(res.data.films);
      })
   }, [])

  console.log(urlFilms);
    
  let idUrl = [];

  idUrl = urlFilms.map(url => {
    const id = url.split('/')[5];
    console.log(id);
    return id;
  })

  console.log(idUrl);
    
  useEffect(() => {
    for (let id of idUrl) {
      setFilms([])
      axios.get(`https://swapi.dev/api/films/${id}`).then(res => {
        console.log(res)
        setFilms(previous => {
          return [...previous, res.data]
        })
      })
    }
  }, [])

   console.log(films);

   return(
        <div className="App">
          {films.map((film, index) => {
            const idFilm = film.url.split('/')[5];
            console.log(idFilm);
            return <FilmsInfo
                  key={film.url} 
                  name={film.title}
                  url={`https://starwars-visualguide.com/assets/img/films/${idFilm}.jpg`}
            ></FilmsInfo>
          })}
        </div>
    );
}

export default Films;
