import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            // aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CHICKEN RAPP
          </Typography>
          <Button color="inherit"><Link to='/'><h5>Home</h5></Link></Button>
          <Button color="inherit"><Link to='/contact'><h5>Contact</h5></Link></Button>
          <Button color="inherit"><Link to='/todolist'><h5>ToDoList</h5></Link></Button>
        </Toolbar>
      </AppBar>

      {/* <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/todolist'>ToDoList</Link></li>
        </ul>
      </nav> */}
    </Box>
  );
};

export default Navigation;