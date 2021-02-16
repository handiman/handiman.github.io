import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { default as theme } from './Theme';
import Music from './Music';

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Music />
  </ThemeProvider>
), document.getElementsByTagName('main')[0]);