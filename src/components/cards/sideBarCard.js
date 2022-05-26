import { Chip, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

export default function SideBarCard(props) {
    // console.log(props.data)
  return (
    <Grid container p={1} my={2} justifyContent='center' sx={{borderRadius:'25px', bgcolor:'transparent'}}>
        <img alt='Movie Poster' src={props.data.image} width='100%' height={150}/>
        <Grid container justifyContent={'space-between'} p={1.5} sx={{bgcolor:'rgba(255,255,255,0.12)', borderRadius:'15px' }}>
            
            <Typography  color='#fff' my='auto' variant='body2' sx={{width:'60%'}}  > {props.data.Title} </Typography>
            <Divider orientation='vertical' color='#fff'  />
            <Chip label={props.data.Year} sx={{bgcolor:'#fff'}}/>
        </Grid>
    </Grid>
  );
}
