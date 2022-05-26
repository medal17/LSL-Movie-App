import { Avatar, Chip, Divider, Grid, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function SideBarCard() {
    let navigate = useNavigate()
  return (
    <Grid onClick={()=>navigate('/movie')} container p={1} my={2} justifyContent='center' sx={{borderRadius:'25px', bgcolor:'transparent'}}>
        <img src='logo192.png' height={120}/>
        <Grid container justifyContent={'space-between'} p={1.5} sx={{bgcolor:'rgba(255,255,255,0.12)', borderRadius:'15px' }}>
            <Typography color='#fff' my='auto' variant='body2'> Movie TItle </Typography>
            <Divider orientation='vertical' color='#fff'  />
            <Chip label='00:33' sx={{bgcolor:'#fff'}}/>
        </Grid>
    </Grid>
  );
}
