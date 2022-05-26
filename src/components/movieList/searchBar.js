import { Grid, TextField, InputAdornment } from '@mui/material';
// import {Search} from '@m'
import React from 'react';

export default function SearchBar() {
  return (
    <Grid container >
        <TextField
            // InputProps={{startAdornment:(<InputAdornment><Sea</InputAdornment>)}}
            sx={{bgcolor:'rgba(255,255,255,0.4)', color:'red', borderRadius:'10px', padding:'5px 8px'}}
            placeholder='Search Movie'
            color='info'
            fullWidth
            variant='standard'
        />
    </Grid>
  );
}
