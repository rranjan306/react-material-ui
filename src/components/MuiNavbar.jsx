import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" color="inherit">
            <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component='div' sx={{flexGrow: 1}}>POKEMON</Typography>
        <Stack direction='row' spacing={2}>
          <Button color="inherit">Feature</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Sign In</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar