import { Avatar, Chip, Divider, Grid, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';

export default function SideBarCard() {
  return (
    <Grid container py={1} my={2} justifyContent='center' sx={{borderRadius:'25px', bgcolor:'red'}}>
        <img src='logo192.png'/>
        <Grid container p={1.5} sx={{bgcolor:'rgba(255,255,255,0.12)', borderRadius:'15px' }}>
            <Typography color='#fff' variant='body2'> Movie TItle </Typography>
            <Divider orientation='vertical' color='#fff' variant='inset' />
            <Chip label='00:33' sx={{bgcolor:'#fff'}}/>
        </Grid>
    </Grid>
  );
}
