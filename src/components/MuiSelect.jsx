import { Typography, TextField, MenuItem, Box, Select } from "@mui/material"
import { useState } from "react"


const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [age, setAge] = useState(10);
  
  console.log('single', country);
  console.log('Multiple', countries);
  console.log('Age', age);

  const handleCountry = (e) => {
    setCountry(e.target.value);
  }

  const handleCountries = (e) => {
    // const value = e.target.value;
    // setCountries(typeof value === 'string' ? value.split(',') : value);
    setCountries(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <>
      <Typography variant="h3" gutterBottom textAlign='center'>Mui Select</Typography>
      <Typography variant="h6" gutterBottom>Single Select Dropdown</Typography>
      <Box width='250px'>
        <TextField label='Select Country' fullWidth select value={country} onChange={handleCountry}>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='USA'>America</MenuItem>
          <MenuItem value='NE'>Nepal</MenuItem>
        </TextField>
      </Box>

      <Typography variant="h6" gutterBottom>Multiple Select Dropdown</Typography>
      <Box width='250px'>
        <TextField 
          label='Select Country' 
          fullWidth select 
          value={countries} 
          SelectProps={{multiple: true}} 
          onChange={handleCountries}
          size="small"
          color="secondary">
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='USA'>America</MenuItem>
          <MenuItem value='NE'>Nepal</MenuItem>
        </TextField>
      </Box>

     <Box width='250px'>
      {/* <InputLabel id="age">Age</InputLabel> */}
        <Select
          labelId="age"
          id="ageselect"
          value={age}
          label="Age"
          onChange={handleAge}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
     </Box>
    </>
  )
}

export default MuiSelect