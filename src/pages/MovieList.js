import { Grid } from '@mui/material';
import React from 'react';
import SideBar from '../components/movieList/sideBar';

export default function MovieList() {
  return (
      <Grid container>
        <SideBar/>
      </Grid>
  );
}
