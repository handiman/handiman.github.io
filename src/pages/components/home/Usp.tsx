import React from 'react';
import { Grid, Card, CardContent, Icon, Typography, makeStyles } from '@material-ui/core';
import { Section } from '../../../components';

const useStyles = makeStyles(() => {
  return {
    card: {
      paddingTop:'2rem',
      height:'100%',
      backgroundColor:'transparent'
    },
    clickable: {
      cursor: 'pointer'
    },
    icon: {
      fontSize: 50
    },
    image: {
      height: 55
    }
  }
});

const Usp = (usp: any) => {
  const classes = useStyles();

  const onClick = (e: any) => {
    e.preventDefault();
    if (usp.link && usp.link.href) {
      document.location.href = usp.link.href;
    }
  }

  return (
    <Card variant="outlined" elevation={0} className={usp.link ? `${classes.card} ${classes.clickable}` : classes.card} onClick={onClick}>
      <CardContent>
        <Typography align="center" gutterBottom>
          {usp.font && <Icon className={`${usp.font} ${classes.icon}`} />}
          {usp.icon && <img src={usp.icon} alt="" className={classes.image} />}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {usp.title}
        </Typography>
        {usp.excerpt}
      </CardContent>
    </Card>
  );
}

export default (props: { usps: any }) => {
  const { usps } = props;

  return (
    <Section>
      <Grid container spacing={2}>
        {usps.map((usp: any, index: number) => (
          <Grid item sm key={index}>
            <Usp {...usp} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}