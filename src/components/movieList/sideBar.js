import { Grid } from '@mui/material';
import React from 'react';
import SideBarCard from '../cards/sideBarCard';
import HeadText from '../HeadText';

export default function SideBar() {
    const data= [
        {id:1, Title:'When you are Gone', Year:'2020', image:'images-2.jpeg'},
        {id:2, Title:'Too far From Home', Year:'2020', image:'Action.jpg'}
    ]
  return (
   <Grid item md={3} sm={12} xs={12} px={1} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>
       <Grid>
           <HeadText text='Advertised Movies'/>
           
           { data.map(e=>
               <SideBarCard key={e.id} data={e}/>
               )
           }
       </Grid>
   </Grid>
  );
}
