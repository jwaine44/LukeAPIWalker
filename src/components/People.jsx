import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router';
import './style.css';
import axios from 'axios';
import obiwan from './img/ObiWan.jpg'

const People = (props) => {
    const [people, setPeople] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPeople(response.data)
                console.log(response.data)
            })
            .catch(err => {
              console.log(err)
              setPeople("")
            })
    }, [id]);

  return (
            <div>
              {people.length === 0?
              <div>
                <img src={obiwan} alt='Obi-Wan'></img>
                <h1>These aren't the droids you're looking for</h1>
              </div>:
              <div>
                <h1>{people.name}</h1>
                <p>Height: {people.height} cm</p>
                <p>Mass: {people.mass} kg</p>
                <p>Hair color: {people.hair_color}</p>
                <p>Skin color: {people.skin_color}</p>
              </div>
              }
            </div>
  )
}

export default People