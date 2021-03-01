import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { useErrorBoundary } from 'use-error-boundary';
import { theme, useStyles } from './theme';
import { ProfileProvider } from './Profile';
import { ApiProvider, useApi } from '../Api';
import { Error, Resume } from './views';

export const App = () => {
  const { ErrorBoundary } = useErrorBoundary();
  const [didCatch, setDidCatch] = useState(false);
  const { root } = useStyles();
  const { ping } = useApi();

  useEffect(() => {
    alert("Ping");
    const handle = window.setInterval(() => {
      console.log("Ping");
      ping().then(response => console.log(response));
    }, 30000);
    return () => window.clearInterval(handle);
  }, []);

  return (
    <HashRouter>
      <ApiProvider>
        <ThemeProvider theme={theme}>
          <main className={root}>
            {didCatch ? <Error /> : (<ErrorBoundary>
              <ProfileProvider onError={e => {
                console.error(e);
                setDidCatch(true);
              }}>
                <Switch>
                  <Route exact path="/">
                    <Resume />
                  </Route>
                  <Route exact path="/cv">
                    <Resume />
                  </Route>
                  <Route exact path="/contact">
                    <Resume showContactForm />
                  </Route>
                </Switch>
              </ProfileProvider>
            </ErrorBoundary>)}
          </main>
        </ThemeProvider>
      </ApiProvider>
    </HashRouter>
  );
}