import { Grid, Skeleton } from '@mui/material';
import React, {useState} from 'react';
import MainCard from '../cards/mainCard';
import HeadText from '../HeadText';
import SearchBar from './searchBar';

export default function MainPage(props) {
  // console.log(props.data) 
  const [searchText, setSearchText] = useState(null)

  return (
    <Grid item md={9} px={2}>
      <HeadText text='Now Showing' />
      <SearchBar setSearchText={setSearchText}/>
      <Grid container >
        { props.data ? (!searchText ? props.data?.Search.map(e=>
        <Grid item md={4} sm={6} xs={12} key={e.imdbID}>
          <MainCard data={e}/>
        </Grid>): 
        props.data?.Search.map(e=>e.Title.toLowerCase().includes(searchText) &&
          <Grid item md={4} sm={6} xs={12} key={e.imdbID}>
            <MainCard data={e}/>
          </Grid>)
        )
        
        :

        <Grid container>
         {[1,2,3,4,4].map((e,index)=> <Grid item md={4} sm={6} xs={11} key={index}>
            <Grid container p={1} my={2} justifyContent='center' sx={{borderRadius:'25px', bgcolor:'transparent'}}>
              <Skeleton variant="rectangular" width={'100%'} height={118} />
            </Grid>
            <Grid container p={1}  justifyContent='center' sx={{borderRadius:'25px', bgcolor:'transparent'}}>
              <Skeleton variant="rectangular" width={'100%'} height={20} />
            </Grid>
            <Grid container p={1}  justifyContent='center' sx={{borderRadius:'25px', bgcolor:'transparent'}}>
              <Skeleton variant="rectangular" width={'100%'} height={20} />
            </Grid>
          </Grid>)}
        </Grid>}

        {/* <Grid item md={6} sm={6} xs={12}>
        <SideBarCard/>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
