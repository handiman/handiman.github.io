import { Container, createStyles, Grid, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { SectionProps } from '../../../components';
import { IExperience } from '../../../Profile';
import { Experience } from '.';

const styles = (theme: Theme) =>  createStyles({
  root: {
    '& > ul > li': {
      boxSizing: 'border-box',
      marginTop: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }
});

export interface ExperienceSectionProps extends SectionProps, WithStyles<typeof styles> {
  experience: Array<IExperience>,
  layout?: 'list' | 'grid'
}

const ExperienceSectionComponent: React.FC<ExperienceSectionProps> = ({ title, experience, classes, layout = 'grid' }) => (
  <Container className={classes.root}>
    {title && <header>{title}</header>}
    <Grid container component="ul">
      {experience.map((xp: IExperience, i: number) => (
        <Grid item xs={12} sm={'list' === layout ? 12 : 6} key={i} component="li">
          <Experience experience={xp} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export const ExperienceSection = withStyles(styles)(ExperienceSectionComponent);