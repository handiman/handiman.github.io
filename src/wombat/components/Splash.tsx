import React from 'react';
import { Container, createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import { Colors } from '../theme';
import { Page, SectionProps } from '.';

const styles = (theme: Theme) => createStyles({
  root: {
    '@media print': {
      backgroundColor: 'transparent',
      color: `${Colors.Black} !important`
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  contact: {
    '@media print': {
      marginTop: theme.spacing(2),
      paddingTop: theme.spacing(2),
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      '& .print': {
        marginBottom: theme.spacing(1)
      },
      '& .fas': {
        display: 'inline-block',
        width: theme.typography.fontSize * 2
      }
    }
  },
  loading: {
    '@media print': {
      display: 'none'
    },
    position: 'fixed',
    display: 'table',
    width: '100%',
    height: '100vh',
    zIndex: 2,
    left: 0,
    top: 0,
    paddingTop: theme.spacing(2),
    fontSize: '2rem',
    '& > div': {
      display: 'table-cell',
      width: '100%',
      height: '100vh',
      textAlign: 'center',
      verticalAlign: 'middle'
    }
  }
});

export interface SplashProps extends SectionProps, WithStyles<typeof styles> { loading?: boolean }

const SplashView: React.FC<SplashProps> = ({ loading, classes }) => {
  return (
    <Page centerVertically>
      <Container className={classes.root}>
        <div className="noPrint">Hi, I'm</div>
        <Typography variant="h1">Henrik Becker</Typography>
        <Typography variant="h4" component="div">
          <span className="noPrint">Freelancing </span>
          <span className="print">Senior </span>
          <span>Fullstack .Net Developer</span>
        </Typography>
        <div className={classes.contact}>
          <div className="noPrint">You'll like me</div>
          <div className="print"><i className="fas fa-phone"></i> +46 (0)73 422 83 43</div>
          <div className="print"><i className="fas fa-globe"></i>www.henrikbecker.net</div>
        </div>
      </Container>
      {loading && (
        <div className={classes.loading}>
          <div>
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
        </div>
      )}
    </Page>
  );
}

export const Splash = withStyles(styles)(SplashView);