import { Grid, Typography, Chip } from '@mui/material';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import HeadText from '../components/HeadText';

export default function ViewMovie() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {r: 'json', i: location.state.id},
    headers: {
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      'X-RapidAPI-Key': '1d12e4a2f5msh699854d6ae8f8dbp120727jsn03415b65086b'
    }
  };
  
  const request =()=>{
    axios.request(options).then(function (response) {
    // console.log(response.data);
    setMovies(response.data)

  }).catch(function (error) {
    console.error(error);
  });}

  useEffect(()=>{
    request(); 
  },[])

  // console.log(movies)
  

  return (
    movies &&
    <Grid container justifyContent='center' py={2}>
        {/* //Movie Image */}
        <Grid container justifyContent='center' md={10} sm={10} xs={11} sx={{bgcolor:'rgba(255,255,255,0.1)', borderRadius:'15px'}}>
          <img src={movies.Poster?movies.Poster: 'logo512.png'} height={250}/>
        </Grid>

        {/* Movie Information */}
        <Grid mx={{xs:1, md:8, sm:5}} md={10} sm={10} xs={11}  my={2} container>
          <Grid container justifyContent={'space-between'}>
            <HeadText text={movies.Title}/>
            {/* <HeadText bodyText text='Time'/> */}
            <Chip label={movies.Released} sx={{bgcolor:'#fff'}}/>
            <Chip label={movies.Country} sx={{bgcolor:'#fff'}}/>
            <HeadText bodyText text={movies.imdbRating+'/10'}/>
            
          </Grid>

          <Grid py={2} container>
            <HeadText bodyText text={movies.Plot}/>
          </Grid>

          <Grid container>
            <HeadText bodyText text={movies.Actors}/>
          </Grid>

          <Grid container>
            <HeadText bodyText text={'Votes: '+movies.imdbVotes}/>
          </Grid>
        </Grid>
    </Grid>

  );
}
