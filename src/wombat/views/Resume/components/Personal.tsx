import React, { useState } from 'react';
import { Button, Container, createStyles, Dialog, DialogActions, DialogContent, Grid, Link, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import { SectionProps } from '../../../components';
import { Colors } from '../../../theme';

const styles = (theme: Theme) => createStyles({
  root: {
    '@media print': {
      display: 'none'
    },
    '& > div > div': {
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(4)
    }
  },
  interests: {

  },
  fun: {
    '& li': {
      marginBottom: theme.spacing(2)
    }
  },
  dinghy: {
    '& img': {
      width: '100%',
      boxSizing: 'border-box',
      padding: theme.spacing(2),
      border: `1px solid ${Colors.LightGrey}`
    },
    '& figcaption': {
      marginTop: theme.spacing(1),
      textAlign: 'center'
    }
  }
});

interface PersonalComponentProps extends SectionProps, WithStyles<typeof styles> {
  interests: Array<string>
}

export const Personal = withStyles(styles)((props: PersonalComponentProps) => {
  const { classes, title, interests } = props;
  const [isDinghyVisible, setIsDinghyVisible] = useState(false);
  const showDinghy = () => setIsDinghyVisible(true);
  const hideDinghy = () => setIsDinghyVisible(false);

  const Dinghy = () => {
    const alt = "That's me sailing the dinghy. Photo taken shortly after the dinosaurs went extinct.";
    return (
      <Dialog open={isDinghyVisible} onClose={hideDinghy} className={classes.dinghy}>
        <DialogContent>
          <img src="https://henrikbeckerstorage.blob.core.windows.net/img/dinghy.jpg" alt={alt} />
          <figcaption>{alt}</figcaption>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideDinghy} color="primary" variant="contained">Close</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Container className={classes.root}>
      {title && <header>{title}</header>}
      <Grid container>
        {interests && (
          <Grid item xs={12} sm={12} md lg className={classes.interests}>
            <Typography variant="h4">Interests & Hobbies</Typography>
            <ul>
              {interests.map((interest: string, i: number) => (
                <li key={i}>{interest}</li>
              ))}
            </ul>
          </Grid>
        )}
        <Grid item xs={12} sm={12} md lg className={classes.fun}>
          <Typography variant="h4">Fun facts</Typography>
          <ul>
            <li>
              <h6>I designed my own sailing dinghy when I was 13</h6>
              <Dinghy />
              <Link style={{ cursor: 'pointer' }} onClick={showDinghy}>Yep, it's true</Link>.
              I come from a family of boat builders and my dad helped me design and build it in his spare time.
            </li>
            <li>
              <h6>I used to dream of being a professional musician</h6>
              Then I saw the light and became a developer but music is still very important to me.
            </li>
            <li>
              <h6><i className="fas fa-shield-virus"></i> I am Covid-19 resistant</h6>
              Had it in november 2020 but survived <i className="far fa-smile-beam"></i> <i className="fas fa-glass-cheers"></i>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
});