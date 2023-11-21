import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';
import Link from 'next/link';

export const Navbar = () => {
  return (
      <AppBar sx={{position: 'static', margin: '0px'}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Tabs>
            <Link href="/">
            <Tab label="Home" />
            </Link>
            
            <Tab label="About" />
            <Tab label="Contact" />
            <Link href="/login">
            <Tab label="Login" sx={{textDecorationColor: "white", color: "white"}} />
            </Link>
            <Link href="/register">
            <Tab label="Signup" />
            </Link>
          </Tabs>
        </Toolbar>
      </AppBar> 
  );
}
export default Navbar;