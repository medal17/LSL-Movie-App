import { Grid } from '@mui/material';
import React from 'react';
import SideBarCard from '../cards/sideBarCard';
import HeadText from '../HeadText';
import SearchBar from './searchBar';

export default function MainPage(props) {
  // console.log(props.data) 
  return (
    <Grid item md={9} px={2}>
      <HeadText text='Now Showing' />
      <SearchBar/>
      <Grid container >
        { props.data?.Search.map(e=>
          <Grid item md={4} sm={6} xs={12}>
          <SideBarCard data={e}/>
        </Grid>)}

        {/* <Grid item md={6} sm={6} xs={12}>
        <SideBarCard/>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
