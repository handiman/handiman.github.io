import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Box } from '@material-ui/core';
import { PictureAsPdfOutlined, LinkedIn, GitHub } from '@material-ui/icons';

export default (props: { toggleContactForm: () => void }) => {
  const { toggleContactForm } = props;
  return (
    <Box displayPrint="none">
      <AppBar color="secondary" component="nav" position="fixed" elevation={0}>
        <Toolbar>
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/cv">Profile</Button>
          <Button onClick={toggleContactForm}>Contact</Button>
          <IconButton href="/static/resume.pdf" title="CV in PDF format">
            <PictureAsPdfOutlined />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/prettygoodprogrammer" title="Look me up on LinkedIn">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://github.com/handiman" title="Check out how I code">
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}