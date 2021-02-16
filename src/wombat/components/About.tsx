import { Button, Dialog, DialogActions, DialogContent, Link, Typography } from '@material-ui/core';
import React from 'react';

export const About: React.FC<{ open?: boolean, onClose?: () => void }> = ({ open = false, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="body2" component="div">
          <Typography variant="h6">Technologies used on this site:</Typography>
          <Typography variant="caption">Frontend</Typography>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            <li>React</li>
            <li>TypeScript</li>
            <li>Material UI</li>
            <li>Storybook</li>
            <li>Font Awesome</li>
            <li>CSS</li>
            <li>HTML (obviously...)</li>
          </ul>
          <Typography variant="caption">Hosting</Typography>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            <li>GitHub Pages</li>
          </ul>
          The source code can be found at:<br />
          <Link onClick={onClose} href="https://github.com/handiman/handiman.github.io">https://github.com/handiman/handiman.github.io</Link>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}