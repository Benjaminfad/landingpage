import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../Theme";

import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import EventIcon from '@mui/icons-material/Event';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HelpIcon from '@mui/icons-material/Help';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `transparent !important`,
          width:"120%",
          height:"100vh",
          padding:"10px",
          borderRadius:"24px",
          border:"2.47px solid rgba(237, 239, 242, 1)"
            
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "15px !important",
          backgroundColor:"#fff",
          boxShadow: "10px 2.46704px 6.16761px rgba(38, 51, 77, 0.03)",
          borderRadius:"12.30px",
          color:" rgba(174, 171, 216, 1)"
        },
        "& .pro-inner-item:hover": {
          color: "#fff !important",
          backgroundColor:" rgba(243, 114, 63, 1)",
          borderRadius:"12.30px"
        },
        "& .pro-menu-item.active": {
          color: "#fff !important",
          backgroundColor:" rgba(243, 114, 63, 1) "

        },
      }}
    >
      <ProSidebar>
        <Menu>
          <Box paddingLeft="0%"
           display="grid"  gap="10px" marginRight="1%" 
          >
            <Item
              title="Home"
              to="/home"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected} 
              style={{ fontSize:"10px"}}
            />

            <Item
              title="My Jobs"
              to="/jobs"
              icon={<ChatBubbleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Submitted Application"
              to="/edit"
              icon={<EventIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Resumes"
              to="/resume"
              icon={<CloudDownloadIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Interviews"
              to="/interview"
              icon={<ForumIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Skill"
              to="/skill"
              icon={<HelpIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
           <Box 
             width="100%"
            height="28vh"
            padding="14px"
            backgroundColor="#FFF"
            borderRadius="12.30px"
           >
          <IconButton
           sx={{ 
            "&:hover": {
              backgroundColor:"transparent"
            }
           }}
          > 
            <Button
             style={{ display:"flex", padding:"20px", width:"100%" , gap:"8rem" ,backgroundColor:"rgba(255, 244, 240, 1)", borderRadius:"12.34px", fontSize:"13px", color:"rgba(243, 114, 63, 1)",
           marginTop:"35%", 
            }}
            
            >
           <span>Log out</span>
            <ArrowBackIcon/>
            </Button>
          </IconButton>
           </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
