import { createStyles, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { IExperience } from '../../../Profile';
import { Colors } from '../../../theme';

const Bullet = {
  Pointing: '"\\261B"',
  Diamond: '"\\25C6"',
  Triangle: '"\\25B7"',
  Square: '"\\25AA"',
  LightCheckMark: '"\\1F5F8"',
  CheckMark: '"\\2713"',
  CheckBox: '"\\2611"',
  ThumbsUp: '"\\1F592"'
}

const styles = (theme: Theme) => createStyles({
  root: {
    fontFamily: 'Open Sans',
    '& .summary, .skills': {
      marginTop: theme.spacing(1)
    },
    '& ul li:before': {
      content: Bullet.CheckMark,
      color: Colors.DarkGreen,
      fontSize: '1rem',
      fontWeight: 'bold',
      width: theme.spacing(2),
      display: 'inline-block'
    },
    '& h6': {
      ...theme.typography.caption,
      marginTop: theme.spacing(1)
    }
  }
});

export interface ExperienceProps extends WithStyles<typeof styles> {
  experience: IExperience
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience, classes }) => {
  const { name, role, from, to, summary, skills } = experience

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        {name}
        <Typography variant="caption" component="div">
          {role && <span>{role} | </span>}
          <span>{from}{to ? ` - ${to}` : ''}</span>
        </Typography>
      </Typography>
      {summary && summary.trim().length > 0 && (
        <ReactMarkdown className="summary" source={summary} allowDangerousHtml={true} />
      )}
      {skills && skills.length > 0 && (
        <div className="skills">
          <Typography variant="caption" component="div">
            Skills used
          </Typography>
          {skills.map((skill: string, i: number) => (
            <span key={i}>{skill}{i < skills.length - 1 ? ', ' : ''}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export const Experience = withStyles(styles)(ExperienceComponent);