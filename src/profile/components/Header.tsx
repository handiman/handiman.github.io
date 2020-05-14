import React, { Fragment } from 'react';
import { Section } from '.';
import { Box, Typography, makeStyles, IconButton } from '@material-ui/core';
import { HEADER_BACKGROUND_IMAGE } from './Layout';
import { ArrowDownwardOutlined } from '@material-ui/icons';
const useStyles = makeStyles(_ => ({
  section: {
    cursor: 'pointer',
    backgroundImage: `url(${HEADER_BACKGROUND_IMAGE})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',
    width: '100%',
    '& .MuiContainer-root': {
      lineHeight: '100vh',
    }
  },
  header: {
    display: 'inline-block',
    width: '100%',
    verticalAlign: 'middle'
  },
  button: {
    marginTop: 40,
    border: '1px solid'
  }
}));

export default () => {
  const classes = useStyles();

  const scrollToContent = (_: any) => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    if (header && nav) {
      window.scrollTo({
        top: header.clientHeight - nav.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Fragment>
      <Section id="header" component="header" className={classes.section} onClick={scrollToContent} displayPrint="none">
        <Typography variant="h1" align="center" className={classes.header}>
          <Box component="span" displayPrint="none">Hi, I'm </Box>
          <Box component="span">Henrik Becker</Box>
          <Typography variant="h4" component={Box}>
            <Box>Software Engineer</Box>
            <Box displayPrint="none">You'll like me</Box>
            <IconButton onClick={scrollToContent} className={classes.button}>
              <ArrowDownwardOutlined />
            </IconButton>
          </Typography>
        </Typography>
      </Section>
      <Section component="header" display="none" displayPrint="block">
        <Typography variant="h1" align="center">
          Henrik Becker
          <Typography variant="h4" component={Box}>
            Software Engineer
          </Typography>
        </Typography>
      </Section>
    </Fragment>
  );
}