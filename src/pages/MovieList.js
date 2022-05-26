import { Grid } from '@mui/material';
import React, {useEffect,useState} from 'react';
import axios from 'axios'

import HeadText from '../components/HeadText';
import MainPage from '../components/movieList/mainPage';
import SideBar from '../components/movieList/sideBar';

export default function MovieList() {
  const [movies, setMovies] = useState(null);

  

  const request=() =>{ 
    axios.request({
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {s: 'Avengers Endgame', r: 'json', page: '1'},
    headers: {
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      'X-RapidAPI-Key': '1d12e4a2f5msh699854d6ae8f8dbp120727jsn03415b65086b'
    }
  })
  .then(function (response) {
    setMovies(response.data)
  }).catch(function (error) {
    console.error(error);
  });}


  
  useEffect(()=>{
    request(); 
  })
  return (
      <Grid container >
        <Grid container px={2} py={3}>
          <HeadText text='LSL MOVIES'/>
        </Grid>
        <SideBar/>
        <MainPage data={movies}/>
      </Grid>
  );
}
