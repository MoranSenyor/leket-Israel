import { Grid, Stack, IconButton, Drawer, Box } from "@mui/material";
import { useState } from "react";
import Settings from "./Settings";
// assets
import leketIsraelLogoImg from "./assets/images/sidebar/LeketIsraelLogos.png";
import profileImg from "./assets/images/sidebar/Profile.png";
import category2Img from "./assets/images/sidebar/Category2.png";
import category3Img from "./assets/images/sidebar/Category3.png";
import settingsImg from "./assets/images/sidebar/settings.png";

const Sidebar = () => {
  const [openSettingsPopup, setOpenSettingsPopup] = useState(false);
  const drawerWidth    = 80,
        boxButtonWidth = 80,
        iconSize       = 40;
  
  const button = {
    color: "white",
    justifySelf: 'flex-start'
  }

  const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
    '.css-18sg6k4-MuiPaper-root-MuiDrawer-paper': {
      borderLeft: 0
    }
  }

  const handleSettingsPopup = () => setOpenSettingsPopup(true);

  return (
    <>
      <Drawer elevation={0} sx={drawerStyle} variant="permanent" anchor="right">
        <Box component="img" alt="" width={80} height={80} src={leketIsraelLogoImg} />
        <Stack spacing={1.5} marginTop='10%' justifyContent="space-between" alignItems="center" height='100%' width={boxButtonWidth}
          backgroundColor='#488856' borderRadius='20px 0px 0px 0px'>
          <br />
          <br />
          <Stack spacing={1.5} justifyContent="flex-start">
            <IconButton>
              <Box component="img" sx={button} alt="" height={iconSize} width={iconSize} src={profileImg} />
            </IconButton>
            <IconButton>
              <Box component="img" sx={button} alt="" height={iconSize-15} width={iconSize-15} src={category2Img} />
            </IconButton>
            <IconButton>
              <Box component="img" sx={button} alt="" height={iconSize} width={iconSize} src={category3Img} />
            </IconButton>
          </Stack>
          <Grid item>
            <IconButton onClick={handleSettingsPopup}>
              <Box component="img" sx={button} alt="" src={settingsImg} />
            </IconButton>
          </Grid>
        </Stack>
      </Drawer>
      {openSettingsPopup ? <Settings /> : ''}
    </>
  )
}

export default Sidebar;
