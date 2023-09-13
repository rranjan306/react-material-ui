import { Typography, Box, Stack, Grid, Paper } from "@mui/material"

const MuiLayout = () => {
  return (
    //For Paper Layout effect enable the change the body bg color
    <Paper elevation={0} sx={{padding: '40px'}}>
      <Typography variant="h3" gutterBottom>Box Layout</Typography>
      <Box sx={{mb: '5px'}}>
        I am Div
      </Box>
      <Box component='span'>
        I am span
      </Box>

      <Box display='flex' sx={{mt: '5px', mb:'40px'}}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Box>

      <Typography variant="h3" gutterBottom>Stack Layout</Typography>
      <Stack spacing={1} direction={{xs: 'column', md: 'row', sm: 'row'}} sx={{'border': '1px solid red'}}>
        <Box sx={{
          backgroundColor: 'secondary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '20px',
          "&:hover": {
            backgroundColor: 'secondary.light'
          }
        }}>
          Item 1
        </Box>

        <Box sx={{
            backgroundColor: 'success.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '20px',
            "&:hover": {
              backgroundColor: 'success.light'
            }
        }}>
          Item 2
        </Box>
      </Stack>

      <Typography variant="h3" gutterBottom sx={{'mt': '40px'}}>Grid Layout</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}><Box bgcolor='secondary.dark' color='white' p={2}>Item 1</Box></Grid>
        <Grid item xs={12} md={6}><Box bgcolor='secondary.dark' color='white' p={2}>Item 2</Box></Grid>
        <Grid item xs={12} md={6}><Box bgcolor='secondary.dark' color='white' p={2}>Item 3</Box></Grid>
        <Grid item xs={12} md={6}><Box bgcolor='secondary.dark' color='white' p={2}>Item 4</Box></Grid>
      </Grid>
    </Paper>
  )
}

export default MuiLayout