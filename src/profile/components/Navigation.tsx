import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box } from '@material-ui/core';
import { PictureAsPdfOutlined, LinkedIn, GitHub } from '@material-ui/icons';

export default (props: { onToggleContactForm: () => void }) => {
  const { onToggleContactForm } = props;
  return (
    <Box displayPrint="none">
      <AppBar color="secondary" component="nav" position="fixed" elevation={0}>
        <Toolbar>
          <Button href="/">Home</Button>
          <Button href="/cv">Profile</Button>
          <Button onClick={onToggleContactForm}>Contact</Button>
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