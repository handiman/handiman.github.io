import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CutUp from './CutUp';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#E7E8E9'
    },text: {
      primary: '#010101'
    }
  }
});

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <CutUp />
  </ThemeProvider>
), document.getElementById("root"), () => {
  document.body.style.backgroundColor = '#E7E8E9';
  document.body.style.color = '#010101';
});