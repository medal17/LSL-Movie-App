import { Grid, Skeleton, Chip } from '@mui/material';
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
  })

  // console.log(movies)
  

  return (
    movies ?
    <Grid container justifyContent='center' py={2}>
        {/* //Movie Image */}
        <Grid container justifyContent='center' md={8} sm={10} xs={11} sx={{bgcolor:'rgba(255,255,255,0.1)', borderRadius:'15px'}}>
          <img alt='Movie Poster' src={movies.Poster!=='N/A'?movies.Poster: 'no-image-vector-symbol-missing-260nw-1310632172.jpg'} height={250}/>
        </Grid>

        {/* Movie Information */}
        <Grid mx={{xs:1, md:8, sm:5}} md={8} sm={10} xs={11}  my={2} container>
          <Grid container justifyContent={'space-between'}>
            <HeadText text={movies.Title}/>
            {/* <HeadText bodyText text='Time'/> */}
            <Chip label={movies.Released} sx={{bgcolor:'#fff'}}/>
            <Chip label={movies.Country !=='N/A'?movies.Country:'Country : N/A'} sx={{bgcolor:'#fff'}}/>
            <HeadText bodyText text={movies.imdbRating !=="N/A" ? movies.imdbRating +'/10': 'Not Rated'}/>
            
          </Grid>

          <Grid py={2} container>
            <HeadText bodyText text={movies.Plot !== "N/A" ? movies.Plot:'No Description' }/>
          </Grid>

          <Grid container>
            <HeadText bodyText text={movies.Actors}/>
          </Grid>

          <Grid container>
            <HeadText bodyText text={'Votes: '+movies.imdbVotes}/>
          </Grid>
        </Grid>
    </Grid>:
    <Grid container justifyContent='center' py={2}>
      <Grid container justifyContent='center' md={8} sm={10} xs={11} sx={{bgcolor:'rgba(255,255,255,0.1)', borderRadius:'15px'}}>
        <Skeleton variant="rectangular" width='100%' height={250} />
      </Grid>
      <Grid mx={{xs:1, md:8, sm:5}} md={8} sm={10} xs={11}  my={2} container>
        <Skeleton variant="rectangular" width={'100%'} height={20} />
      </Grid>

      <Grid mx={{xs:1, md:8, sm:5}} md={8} sm={10} xs={11}  my={0.5} container>
        <Skeleton variant="rectangular" width={'100%'} height={20} />
      </Grid>

      <Grid mx={{xs:1, md:8, sm:5}} md={8} sm={10} xs={11}  my={0.5} container>
        <Skeleton variant="rectangular" width={'100%'} height={20} />
      </Grid>

      <Grid mx={{xs:1, md:8, sm:5}} md={8} sm={10} xs={11}  my={0.5} container>
      < Skeleton variant="rectangular" width={'100%'} height={20} />
      </Grid>
     
    </Grid>

  );
}
