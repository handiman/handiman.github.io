import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme, useStyles } from '../src/wombat/theme';
import { MemoryRouter } from 'react-router-dom';
import { MockApi } from '../src/Api';

export const decorators = [
  (Story) => {
    const classes = useStyles();
    return (
      <div style={{ height: '100vh' }}>
        <MemoryRouter>
          <MockApi>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <main className={classes.root}>
                <Story />
              </main>
            </ThemeProvider>
          </MockApi>
        </MemoryRouter>
      </div>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen'
}