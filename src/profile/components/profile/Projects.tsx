import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Section } from '../../components';
import { PROJECTS } from '../Layout';

const useStyles = makeStyles(_ => ({
  list: {
    listStyle: 'none',
    margin:0,
    paddingLeft: 0
  },
  section: {
    backgroundColor:PROJECTS
  },
  project: {
    marginBottom:'2rem'
  }
}));

const Project = (props: { project: any }) => {
  const { project } = props;
  const classes = useStyles();

  return (
    <div className={classes.project}>
      <Typography variant="h3">
        {project.title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {project.from} - {project.to} {project.location}
      </Typography>

      {project.description && (
        <Typography variant="body1" gutterBottom>
          {project.description}
        </Typography>
      )}

      {project.achievements && (
        <Typography variant="body1" component="div" gutterBottom>
          <Typography variant="subtitle1" component="div">
            Highlights:
          </Typography>
          <ul className={classes.list}>
            {project.achievements.map((achievement: string, index: number) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </Typography>
      )}

      {project.skills && (
        <Typography variant="body1" component="div" gutterBottom>
          <Typography variant="subtitle1" component="div">
            Technologies used:
          </Typography>
          {project.skills.map((skill: string, index: number) => (
            <span key={index}>
              {skill}{index < project.skills.length - 1 && (<>, </>)}
            </span>
          ))}
        </Typography>
      )}
    </div>
  );
}

export default (props: { projects: any[] }) => {
  const { projects } = props;
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Typography variant="h2" className="no-print">I am experienced</Typography>
      <Typography variant="h2" className="print">Project History</Typography>
      {projects.map((project: any, index: number) => (
        <Project key={index} project={project} />
      ))}
    </Section>
  );
};