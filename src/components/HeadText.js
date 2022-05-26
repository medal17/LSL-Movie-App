import { Typography } from '@mui/material';
import React from 'react';

export default function HeadText(props) {
  return (
    <Typography color='#fff' variant='body1' fontWeight={'bold'}> 
        {props.text}
    </Typography>
  );
}
