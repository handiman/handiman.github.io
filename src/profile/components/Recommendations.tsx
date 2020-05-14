import React from 'react';
import { Typography, Link, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    color:theme.palette.text.primary
  }
}));

const Recommendation = (recommendation: any) => {
  const classes = useStyles();
  
  return (
    <Typography component="blockquote">
      {recommendation.text}
      <Typography component="div" align="right">
        <Link href={recommendation.link} className={classes.link}>
          {recommendation.name}
        </Link>
      </Typography>
    </Typography>
  );
}

export default (props: { recommendations: any }) => {
  const {recommendations } = props;

  return (
    <Grid container spacing={2}>
      {recommendations.map((recommendation: any, index: number) => (
        <Grid item sm key={index}>
          <Recommendation {...recommendation} />
        </Grid>
      ))}
    </Grid>
  );
} 