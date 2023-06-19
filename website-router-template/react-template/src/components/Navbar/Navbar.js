import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  createTheme,
  ThemeProvider,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  styled
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import companyLogo from '../../Assets/webline_logo.png';
import './navbar.css'

import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledButton = styled(Button)({
  marginLeft: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '2rem',
  border: 0,
  color: 'white',
  fontWeight: 'bold',
  boxShadow: 'none',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
});

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <img src={companyLogo} alt="company logo" style={{ width: '4rem', height: '3rem' }} />
          <div className="nav-buttons">
            <StyledButton color="inherit" component={Link} to="/">
              Koti
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/about">
              Meistä
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/services">
              Palvelumme
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/contact">
              Yhteystiedot
            </StyledButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Koti" />
          </ListItemButton>
          <ListItemButton component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary="Meistä" />
          </ListItemButton>
          <ListItemButton component={Link} to="/services" onClick={toggleDrawer}>
            <ListItemText primary="Palvelumme" />
          </ListItemButton>
          <ListItemButton component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary="Yhteystiedot" />
          </ListItemButton>
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;
