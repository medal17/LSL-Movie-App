import { Grid, TextField } from '@mui/material';
import React from 'react';

export default function SearchBar(props) {
  return (
    <Grid container >
        <TextField
            // InputProps={{startAdornment:(<InputAdornment><Sea</InputAdornment>)}}
            sx={{bgcolor:'rgba(255,255,255,0.4)', color:'red', borderRadius:'10px', padding:'5px 8px'}}
            placeholder='Search Movie by Name'
            color='info'
            fullWidth
            variant='standard'
            onChange={e=>props.setSearchText(e.target.value)}
        />
    </Grid>
  );
}
