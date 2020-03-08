import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { Home, Profile } from './pages';
import { Navigation, Footer, Loading, ContactFormDialog, Header } from './components';
import { getProfile, getUsps, getRecommendations } from './Api';
import { theme } from './Theme';

export default () => {
  const [profile, setProfile] = useState(null);
  const [usps, setUsps] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    getProfile().then(setProfile);
    getUsps().then(setUsps);
    getRecommendations().then(setRecommendations);
  }, []);

  const isLoading = null === profile
    || null === usps
    || null === recommendations;

  const hideContactForm = () => {
    setShowContactForm(false);
  }

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navigation {...{ toggleContactForm }} />
        <Header />
        <Box>
          <Switch>
            <Route exact path="/">
              {isLoading ? <Loading /> : <Home {...{ usps, recommendations, toggleContactForm }} />}
            </Route>
            <Route exact path="/cv">
              {isLoading ? <Loading /> : <Profile {...{ profile, recommendations }} />}
            </Route>
          </Switch>
        </Box>
        <Footer />
        <ContactFormDialog open={showContactForm} onClose={hideContactForm} />
      </Router>
    </ThemeProvider>
  );
}