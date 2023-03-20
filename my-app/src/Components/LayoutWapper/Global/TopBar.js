import React from 'react'
import { Box , IconButton  } from "@mui/material";
import Logo from "../../../Assets/ReactHQ3.svg"
import Profile from "../../../Assets/profile.svg"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';


const TopBar = () => {
  return (
     <Box 
     display="flex" 
     justifyContent="space-between" 
     p={0.2}
     backgroundColor="#FFFFFF"
     width="100%"
     height="10vh"
     >
      {/* LOGO */}
      <Box
       display="flex"
       marginLeft="5.5%"
       >
       <img src={Logo} alt="/" width={100} />
      </Box>

       {/* PROFILE */}
      <Box
       display="flex"
       marginRight="5%"
       gap="1rem"
       paddingBottom="0.5rem"
       >
      <IconButton type="button" >
      <Box
       display="flex" 
       gap="1rem"
      >
        <img src={Profile} alt="/"  />
        <p style={{ fontSize:"14px", fontWeight:"700", color:"#6B7A99" , marginTop:"9%" }}>Babatunde Samuel</p>
       </Box>
      </IconButton>
      <IconButton>
      <SettingsOutlinedIcon  sx={{ fontSize: 30, marginTop:0.8, color:"#F3723F",  }}/>
      </IconButton>
      <IconButton>
     <NotificationsIcon sx={{ fontSize: 50, marginTop:0.8, color:"#F3723F", background: "#FEE9E1", padding:1.8 , borderRadius: 10 , position:"relative", right:19.3 }} />
      </IconButton>
      </Box>
     </Box>
  )
}

export default TopBar;
