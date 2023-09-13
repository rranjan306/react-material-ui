import { Stack, Typography, TextField, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';


const MuiTextField = () => {
  const [value, setValue] = useState('');
  return (
    <>
    <Typography variant='h3' textAlign='center' gutterBottom>Material Text Form</Typography>
      <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
          <TextField label='name' variant='outlined' />
          <TextField label='name' variant='filled' />
          <TextField label='name' variant='standard' />
          <TextField label='Secondary' size='small' color='secondary' />
        </Stack>

        <Stack spacing={2} direction='row'>
          <TextField type='text' label="Name" required color='error' />
          <TextField 
            type='password' 
            label="Password" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            color={!value ? 'error' : 'success'}
            helperText={!value ? 'Required' : 'Do Not Share !'} />
          <TextField label="Disabled" disabled />
          <TextField placeholder='Read Only' InputProps={{readOnly: true}} />
        </Stack>

        <Stack spacing={2} direction='row'>
          <TextField 
            label="username" 
            InputProps={{
              startAdornment: <InputAdornment position='start'><PersonIcon /></InputAdornment>
            }}

          />
        </Stack>
      </Stack>
    </>
  )
}

export default MuiTextField