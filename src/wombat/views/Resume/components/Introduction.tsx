import React from 'react';
import { Container, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import { Summary, SkillsSection as Skills, LanguageSection as Languages } from '.';
import { useProfile } from '../../../Profile';
import { theme } from '../../../theme';
import { SectionProps } from '../../../components';

const styles = () => createStyles({
  root: {
    '& > div': {
      marginTop: theme.spacing(10),
      '&:first-child': {
        marginTop: 0
      }
    }
  }
});

interface IntroProps extends SectionProps, WithStyles<typeof styles> { }

const IntroComponent: React.FC<IntroProps> = ({ title, classes }) => {
  const { summary, skills, languages } = useProfile();

  return (
    <div className={classes.root}>
      <Summary title={title} summary={summary} />
      <Skills title="Skills & Expertise" skills={skills} />
      <Languages title="Languages" languages={languages} />
    </div>
  );
}

export const Introduction = withStyles(styles)(IntroComponent)