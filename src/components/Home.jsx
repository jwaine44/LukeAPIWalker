import React, { useState } from 'react'
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import './style.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {
    const [selection, setSelection] = useState("people");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const sendSearch = (e) => {
        e.preventDefault();
        navigate(`/${selection}/${id}`);
        setId("");
    }

  return (
    <form onSubmit={sendSearch}>
        <label>Search for:</label>
        <select name="search" id="search" className='space' value= {selection} onChange = {(e) => setSelection(e.target.value)}>
          <option value = "people">People</option>
          <option value = "planets">Planets</option>
        </select>
        <label className='space'>ID:</label>
        <input type="number" name='id' className='input' min= '1' value = {id} onChange={(e) => setId(e.target.value)} />
    
        <input type='submit' value='Search' className='space' />
    </form>
  )
}

export default Home;