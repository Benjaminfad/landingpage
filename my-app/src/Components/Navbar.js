import React , { useState} from 'react';
import Logo from '../Assets/ReactHQ logo.png';
import Party from "../Assets/party.png";
import { FaBars} from "react-icons/fa";
import { 
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText, 
} from  "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';


const Navbar = () => {


  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [

         {
           text:"Home",
           icon: <HomeIcon/>,
         },
         
         {
          text:"Products",
          icon: <AssignmentTurnedInIcon/>,
        },
        
        {
          text:"Company",
          icon: <Diversity3Icon/>,
        },
        
        {
          text:"Get Skilss",
          icon: <EmojiObjectsIcon/>,
        },
  ];
  


  return (
    <nav>
      <div className='nav-logo-container'>
       <img src={Logo} alt=""/>
      </div>
      <div className='navbar-links-container'>
       <select name='Products'>
        <option>Products</option>
       </select>
        <select name='Companys'>
          <option>Companys</option>
        </select>
        <a href='/'>Get Skills</a>
        <button className='primary-button'>Get Started
        <img src={Party}/>
        </button>
      </div>
      <div className='navbar-menu-container'>
          <FaBars onClick={() => setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
     <Box sx={{ width:250 }}
     role="presentation"
     onClick={() => setOpenMenu(false)}
     onKeyDown={() => setOpenMenu(false)}
     >
      <List>
        {menuOptions.map((item) => (
          <ListItem key={item.text} disablePadding >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
      </Drawer>
      </nav>
  )
}

export default Navbar;