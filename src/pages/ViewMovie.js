import { Grid, Typography, Chip } from '@mui/material';
import React from 'react';
import HeadText from '../components/HeadText';

export default function ViewMovie() {
  return (
    <Grid container justifyContent='center' py={2}>
        {/* //Movie Image */}
        <Grid container justifyContent='center' md={10} sm={10} xs={11} sx={{bgcolor:'rgba(255,255,255,0.1)', borderRadius:'15px'}}>
          <img src='logo512.png' height={250}/>
        </Grid>

        {/* Movie Information */}
        <Grid mx={{xs:1, md:8, sm:5}} md={10} sm={10} xs={11}  my={2} container>
          <Grid container justifyContent={'space-between'}>
            <HeadText text='Hello World Movie'/>
            {/* <HeadText bodyText text='Time'/> */}
            <Chip label='01:10:30' sx={{bgcolor:'#fff'}}/>
          </Grid>

          <Grid container>
            <HeadText bodyText text='body'/>
          </Grid>

          <Grid container>
            <HeadText bodyText text='body'/>
          </Grid>
        </Grid>
    </Grid>

  );
}
