import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { IPost } from '../Models/IPost';
import { postAPI } from '../Todo/TodoPost';

const Navbar = () => {
    const [addPost, {}] = postAPI.useAddPostMutation()

    const handleAdd = async () => {
        const title = prompt()
        const body = prompt()
        await addPost({title, body} as IPost)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TODO
            </Typography>
            <Button
            onClick={handleAdd}
            color="inherit"
            >Add todo</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navbar;