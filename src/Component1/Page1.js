import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../Css1/Page1.css'


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Divider />
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} />
              </Link>
              {/* <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} />
              </Link> */}
              <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} />
              </Link>
              <Link to='/todo' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Yellow Matics
          
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

          <List sx={{ display: 'flex' }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="button" color="inherit" sx={{ mr: 2 }}>
                Home
              </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="button" color="inherit" sx={{ mr: 2 }}>
                About 
              </Typography>
            </Link>
            <Link to="/todo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="button" color="inherit">
                 Todo
              </Typography>
            </Link>
          </List>
          
        </Box>
        
      </Toolbar>
      <img src="https://www.shutterstock.com/shutterstock/videos/1092907745/thumb/1.jpg?ip=x480" alt="Skills" display="cover" height="600"/>

    </AppBar>
    <Typography align='center' fontSize={45} fontStyle="italic" style={{
        animation: 'slide-in 6s ease forwards',
        opacity: 0}} >
     "Step into my profile, where creativity flourishes and every detail tells a story of passion and skill."
     </Typography>
  </>

  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;