import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormDialog from './formDialog';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, Outlet } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            <Typography> my skills within</Typography>
            Material UI
          </Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button><Link to="/login" className="link">Login</Link></Button>
            <Button><Link to="/dashboard" className="link">dashboard</Link></Button>
          </ButtonGroup>
          <FormDialog />
        </Toolbar>
      </AppBar>
      < Outlet/>
    </Box>
    
  );
}