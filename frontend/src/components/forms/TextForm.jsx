import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({label}) {
  return (
      <TextField 
            id="standard-basic"
            sx={{width:'100%'}}
            label= {label} 
            variant="outlined" 
        />
  );
}
