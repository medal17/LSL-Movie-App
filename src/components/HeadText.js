import { Typography } from '@mui/material';
import React from 'react';

export default function HeadText(props) {
  return (
    <Typography> 
        {props.text}
    </Typography>
  );
}
