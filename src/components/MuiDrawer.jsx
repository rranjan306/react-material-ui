import { Drawer, Box, Typography, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import StarRateIcon from '@mui/icons-material/StarRate';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import DraftsIcon from '@mui/icons-material/Drafts';

const contents = [{
  name: 'Inbox',
  icon: <MailIcon />
}, {
  name: 'Starred',
  icon: <StarRateIcon />
}, {
  name: 'Send Email',
  icon: <AttachEmailIcon />
}, {
  name: 'Drafts',
  icon: <DraftsIcon />
}]


const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const list = () => (
    <Box width='300px' role="presentation">
      <List>
        {
          contents.map((item, index) => (
            <>
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemIcon>{item?.icon} </ListItemIcon>
                  <ListItemText>{item?.name}</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))
        }
      </List>
    </Box>
  )

  return (
    <div>
      <Drawer anchor='left' open={isDrawerOpen} onClose={handleDrawer}>
        {/* <Box padding={2} width='250px' textAlign='center'>
          <Typography variant="h6" component='div'>Side Panel</Typography>
        </Box> */}
        {list()}
      </Drawer>
      <Button variant="contained" color="secondary" onClick={handleDrawer}>Open Drawer</Button>
    </div>
  )
}

export default MuiDrawer