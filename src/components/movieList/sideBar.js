import { Grid } from '@mui/material';
import React from 'react';
import SideBarCard from '../cards/sideBarCard';
import HeadText from '../HeadText';

export default function SideBar() {
  return (
   <Grid item md={3} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>
       <Grid>
           <HeadText text='New Movies'/>
           <SideBarCard/>
           <SideBarCard/>
       </Grid>
   </Grid>
  );
}
