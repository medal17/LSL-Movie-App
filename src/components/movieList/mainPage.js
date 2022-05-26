import { Grid } from '@mui/material';
import React from 'react';
import SideBarCard from '../cards/sideBarCard';
import HeadText from '../HeadText';
import SearchBar from './searchBar';

export default function MainPage() {
  return (
    <Grid item px={2}>
      <HeadText text='Now Showing' />
      <SearchBar/>
      <Grid container >
        <Grid item md={6} sm={6} xs={12}>
          <SideBarCard/>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
        <SideBarCard/>
        </Grid>
      </Grid>
    </Grid>
  );
}
