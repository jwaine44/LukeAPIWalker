import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router';
import './style.css';
import axios from 'axios';

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
                <h3>These aren't the droids you're looking for</h3>:

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