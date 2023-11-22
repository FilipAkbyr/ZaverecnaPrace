import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';
import Link from 'next/link';
// import { HeaderProfileButton } from './navbar-avatar-icon';

export const Navbar = () => {
  return (
      <AppBar sx={{position: 'static', margin: '0px'}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Tabs>
            <Link href="/">
            <Tab label="Home" sx={{textDecorationColor: "white", color: "white"}}/>
            </Link>
            <Link href="/adverts">
            <Tab label="Offers" sx={{textDecorationColor: "white", color: "white"}}/>
            </Link>
            <Tab label="About" />
            <Link href="#">
            <Tab label="Login" sx={{textDecorationColor: "white", color: "white"}}/>
            </Link>
            <Link href="/register">
            <Tab label="Signup" sx={{textDecorationColor: "white", color: "white"}}/>
            </Link>
          </Tabs>
          {/* <HeaderProfileButton></HeaderProfileButton> */}
        </Toolbar>
      </AppBar> 
  );
}
export default Navbar;