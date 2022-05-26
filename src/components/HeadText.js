import { Typography } from '@mui/material';
import React from 'react';

export default function HeadText(props) {
  return (
    <Typography color='#fff' variant={props.bodyText ?'body2':'body1'} fontWeight={props.bodyText ? '':'bold'}> 
        {props.text}
    </Typography>
  );
}
