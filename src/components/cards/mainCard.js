import { Chip, Divider, Tooltip, Grid, Typography } from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function MainCard(props) {
    let navigate = useNavigate()
    // console.log(props.data)
  return (
    <Grid onClick={()=>navigate('/movie',{state:{id:props.data.imdbID}})} container p={1} my={2} justifyContent='center' sx={{borderRadius:'25px', bgcolor:'transparent'}}>
        <img alt='Movie Poster' src={props.data && props.data.Poster !=='N/A'?props.data.Poster:'no-image-vector-symbol-missing-260nw-1310632172.jpg'} width='100%' height={150}/>
        <Tooltip sx={{width:'250px'}} title={props.data && (props.data.Title)} placement="bottom-start">
        <Grid container justifyContent={'space-between'} p={1.5} sx={{bgcolor:'rgba(255,255,255,0.12)', borderRadius:'15px' }}>
            
            <Typography  color='#fff' my='auto' variant='body2' sx={{width:'60%'}}  > {props.data && (props.data.Title.length>20?props.data.Title.substr(0,19)+'...':props.data.Title)} </Typography>
            <Divider orientation='vertical' color='#fff'  />
            <Chip label={props.data && props.data.Year} sx={{bgcolor:'#fff'}}/>
        </Grid>
        </Tooltip>
    </Grid>
  );
}
