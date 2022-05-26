import { Avatar, Chip, Divider, Grid, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function SideBarCard(props) {
    let navigate = useNavigate()
    console.log(props.data)
  return (
    <Grid onClick={()=>navigate('/movie')} container p={1} my={2} justifyContent='center' sx={{borderRadius:'25px', bgcolor:'transparent'}}>
        <img src={props.data && props.data?.Poster} width='100%' height={150}/>
        <Grid container justifyContent={'space-between'} p={1.5} sx={{bgcolor:'rgba(255,255,255,0.12)', borderRadius:'15px' }}>
            
            <Typography  color='#fff' my='auto' variant='body2' sx={{width:'60%'}}  > {props.data && props.data.Title} </Typography>
            <Divider orientation='vertical' color='#fff'  />
            <Chip label={props.data && props.data.Year} sx={{bgcolor:'#fff'}}/>
        </Grid>
    </Grid>
  );
}
