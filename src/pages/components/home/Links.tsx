import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Typography, Grid, Link, makeStyles, Card, CardContent } from '@material-ui/core';
import { BookOutlined, EmailOutlined, LinkedIn } from '@material-ui/icons';
import { Section } from '../../../components';

const useStyles = makeStyles(theme => ({
  font: {
    fontSize: '2.5rem'
  },
  link: {
    color: theme.palette.text.primary,
    cursor:'pointer'
  },
  card: {
    padding:'2rem',
    height:'100%',
    backgroundColor:'transparent'
  }
}));

export default (props: { toggleContactForm: () => void }) => {
  const { toggleContactForm } = props;
  const classes = useStyles();

  return (
    <Section>
      <Typography align="center">
        <Typography variant="h2" gutterBottom>
          Sound good so far?
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm>
            <Link component={RouteLink} to="/cv" className={classes.link}>
              <Card variant="outlined" elevation={0} className={classes.card}>
                <CardContent>
                  <BookOutlined className={classes.font} />
                  <div>Read my full CV!</div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item sm>
            <Link onClick={toggleContactForm} className={classes.link}>
              <Card variant="outlined" component={Card} elevation={0} className={classes.card}>
                <CardContent>
                  <EmailOutlined className={classes.font} />
                  <div>Contact me!</div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item sm>
            <Link href="https://www.linkedin.com/in/prettygoodprogrammer" className={classes.link}>
              <Card variant="outlined" component={Card} elevation={0} className={classes.card}>
                <CardContent>
                  <LinkedIn className={classes.font} />
                  <div>Look me up on LinkedIn!</div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Typography>
    </Section>
  );
}