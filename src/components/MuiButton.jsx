import { Stack, Button, Typography, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';

const MuiButton = () => {
  const [format, setFormat] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(format)

  const handleMe = () => {
    console.log('hello');
  }

  const handleFormatChange = (_event, updatedFormat) => {
    setFormat(updatedFormat);
  }

  const handleLoading = () => {
    setLoading(true)
  }

  return (
    <Stack spacing={4}>
     <Typography variant="h1" gutterBottom textAlign="center"> Material Buttons</Typography>
     <Typography variant="h5" gutterBottom>Simple Buttons</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">Click Me</Button>
        <Button variant="contained" onClick={handleMe}>Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Typography variant="h5" gutterBottom>Text Buttons</Typography>
      <Stack spacing={2} direction="row">
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="error">Error</Button>
          <Button variant="text" color="warning">Warning</Button>
          <Button variant="text" color="info">Info</Button>
          <Button variant="text" color="success">Success</Button>
      </Stack>

      <Typography variant="h5" gutterBottom>Contained Buttons</Typography>
      <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="success" disabled>Success</Button>
      </Stack>

      <Typography variant="h5" gutterBottom>Outlined Buttons</Typography>
      <Stack spacing={2} direction="row">
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="warning">Warning</Button>
          <Button variant="outlined" color="info">Info</Button>
          <Button variant="outlined" color="success">Success</Button>
      </Stack>

      <Typography variant="h5" gutterBottom>Loading Buttons</Typography>
      <Stack spacing={2} direction="row">
        <LoadingButton loading loadingPosition="start" startIcon={<SendIcon />} variant="outlined">Submit</LoadingButton>
        <LoadingButton
          onClick={handleLoading}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
      </Stack>

      <Typography variant="h5" gutterBottom>Button Size</Typography>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      <Typography variant="h5" gutterBottom>Button Icon</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>Disable Ripple</Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>Disable Elevation</Button>
        <IconButton color="error" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      <Typography variant="h5" gutterBottom>Button Groups In Rows</Typography>
      <Stack spacing={2} direction="row">
        <ButtonGroup variant="contained" color="success" size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      </Stack>

      <Typography variant="h5" gutterBottom>Button Groups In Coulmn</Typography>
      <Stack spacing={2} direction="row">
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      </Stack>

      <Typography variant="h5" gutterBottom>Toggle Buttons</Typography>
      <Stack spacing={2} direction="row">
        <ToggleButtonGroup value={format} onChange={handleFormatChange}>
          <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
          <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
          <ToggleButton value='underline'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Typography variant="h5" gutterBottom>Exlusive Toggle Buttons</Typography>
      <Stack spacing={2} direction="row">
        <ToggleButtonGroup value={format} onChange={handleFormatChange} color="warning" exclusive>
          <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
          <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
          <ToggleButton value='underline'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton