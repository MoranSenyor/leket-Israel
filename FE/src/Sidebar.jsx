import { Grid, Stack, IconButton, Drawer, Box } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'
import { Recommend } from '@mui/icons-material';
import { useState } from "react";
import Settings from "./Settings";

const Sidebar = () => {
  const [openSettingsPopup, setOpenSettingsPopup] = useState(false);
  const drawerWidth    = 80,
        boxButtonWidth = 70;
  
  const button = {
    color: "white",
    justifySelf: 'flex-start'
  }

  const handleSettingsPopup = () => setOpenSettingsPopup(true);

  return (
    <>
      <Drawer
        elevation={0}
        sx={{
          width: drawerWidth,
          flexShrink: 0
        }}
        variant="permanent"
        anchor="right"
      >
        <Box
          component="img"
          alt=""
          src="https://www.w3schools.com/images/lamp.jpg"
        />
        <Stack
          spacing={1.5}
          marginTop='30%'
          justifyContent="space-between"
          alignItems="center"
          height='100%'
          width={boxButtonWidth}
          backgroundColor='#488856'
          borderRadius='20px 0px 0px 0px'
        >
          <br />
          <br />
          <Stack spacing={1.5} justifyContent="flex-start">
            <IconButton>
              <Recommend sx={button} />
            </IconButton>
            <IconButton>
              <Recommend sx={button} />
            </IconButton>
            <IconButton>
              <Recommend sx={button} />
            </IconButton>
          </Stack>
          <Grid item>
            <IconButton onClick={handleSettingsPopup}>
              <SettingsIcon sx={button} />
            </IconButton>
          </Grid>
        </Stack>
      </Drawer>
      {openSettingsPopup ? <Settings /> : ''}
    </>
  )
}

export default Sidebar;
