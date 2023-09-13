import { Box, Typography, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';

const MuiRadio = () => {
  const [gender, setGender] = useState('male');
  console.log(gender);

  const handleGender = (event) => {
    setGender(event.target.value);
  }

  return (
    <>
      <Typography variant='h3' gutterBottom textAlign={'center'}>Mui Radio Button</Typography>
      <Box>
        <FormControl>
          <FormLabel>Genders</FormLabel>
          <RadioGroup name='gender-radio-buttons' defaultValue={gender} onChange={handleGender}>
            <FormControlLabel value="female" control={<Radio />} label="Female"  />
            <FormControlLabel value="male" control={<Radio />} label="Male" color='secondary'  />
            <FormControlLabel value="other" control={<Radio />} label="Other"  />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Genders</FormLabel>
          <RadioGroup name='gender-radio-buttons' defaultValue='female' onChange={handleGender} row>
            <FormControlLabel value="female" control={<Radio color='success' />} label="Female"  />
            <FormControlLabel value="male" control={<Radio color='secondary' />} label="Male"  />
            <FormControlLabel value="other" control={<Radio />} label="Other"  />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}

export default MuiRadio
