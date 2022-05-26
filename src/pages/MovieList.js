import { Grid } from '@mui/material';
import React, {useEffect,useState} from 'react';
import axios from 'axios'

import HeadText from '../components/HeadText';
import MainPage from '../components/movieList/mainPage';
import SideBar from '../components/movieList/sideBar';

export default function MovieList() {
  const [movies, setMovies] = useState(null);
  
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
