import { Grid } from '@mui/material';
import React, {useEffect} from 'react';
import axios from 'axios'

import HeadText from '../components/HeadText';
import MainPage from '../components/movieList/mainPage';
import SideBar from '../components/movieList/sideBar';

export default function MovieList() {

  const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {r: 'json', i: 'tt4154796'},
    headers: {
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      'X-RapidAPI-Key': '1d12e4a2f5msh699854d6ae8f8dbp120727jsn03415b65086b'
    }
  };
  
  const request=() =>{ 
    axios.request(options).then(function (response) {
    console.log(response.data);
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
        <MainPage/>
      </Grid>
  );
}
