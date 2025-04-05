import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionForm({label, rows, value, name, onChange, onBlur}) {
  return (
        <TextField
          id="outlined-multiline-static"
          sx={{width:'100%'}}
          label={label}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          multiline
          rows={rows}
        />
  );
}
