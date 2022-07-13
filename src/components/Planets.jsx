import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router';
import './style.css';
import axios from 'axios';
import obiwan from './img/ObiWan.jpg'

const Planets = (props) => {
    const [planets, setPlanets] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanets(response.data)
            })
            .catch(err => {
              setPlanets("")
            })
    }, [id]);

  return (
            <div>
              {planets.length === 0?
              <div>
                <img src={obiwan} alt='Obi-Wan'></img>
                <h1>These aren't the droids you're looking for</h1>
              </div>:
              <div>
                <h1>{planets.name}</h1>
                <p>Climate: {planets.climate}</p>
                <p>Terrain: {planets.terrain}</p>
                <p>Gravity: {planets.gravity}</p>
                <p>Population: {planets.population}</p>
              </div>
              }
            </div>
  )
}

export default Planets;