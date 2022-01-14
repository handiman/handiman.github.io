import React, { } from 'react';
import { createStyles, Paper, Theme, withStyles, WithStyles } from '@material-ui/core';
import { IProfile, useProfile } from '../../Profile';
import { Page, Splash } from '../../components';
import { Introduction, ExperienceSection as Experience, Personal } from './components';
import { DefaultLayout } from '../../theme';

interface WithProfile {
  profile: IProfile
}

const styles = (theme: Theme) => createStyles({
  paper: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }
})

interface DefaultProps extends WithProfile, WithStyles<typeof styles> { 
  showContactForm?: boolean
}

const DefaultResumeLayout: React.FC<DefaultProps> = ({ profile, classes, showContactForm = false }) => {
  const { projects, employers, interests, certifications } = profile;

  return (
    <DefaultLayout showContactForm={showContactForm} certifications={certifications}>
      <Splash title="Top of Page" />

      <Page title="Skills" component={Paper} centerVertically className={classes.paper}>
        <Introduction title="Profile" />
      </Page>

      <Page title="Featured Projects" component={Paper} centerVertically className={classes.paper}>
        <Experience title="Featured Projects" experience={projects} />
      </Page>

      <Page title="Work Experience" component={Paper} className={classes.paper}>
        <Experience title="Work Experience" experience={employers} layout='list' />
      </Page>

      <Page title="Personal" component={Paper} centerVertically className={classes.paper}>
        <Personal title="Personal" interests={interests} />
      </Page>
    </DefaultLayout>
  );
}

const Default = withStyles(styles)(DefaultResumeLayout);

export const Resume: React.FC<{ showContactForm?: boolean }> = ({ showContactForm }) => {
  const profile = useProfile();
  return <Default profile={profile} showContactForm={showContactForm} />;
}