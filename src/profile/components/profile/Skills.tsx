import React from 'react';
import { Section } from '../../components';
import { Typography, makeStyles } from '@material-ui/core';
import { SKILLS } from '../Layout';

const useStyles = makeStyles(_ => ({
  section: {
    backgroundColor: SKILLS
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      paddingBottom:'1rem'
    }
  }
}));

export default (props:any) => {
  const classes = useStyles();
  const { frameworks, languages, methods, tools, databases, certifications } = props;

  return (
    <Section className={classes.section}>
      <Typography variant="h2" className="no-print">I know things</Typography>
      <Typography variant="h2" className="print">Skills</Typography>
      <ul className={classes.list}>
        {frameworks && (<li>
          <Typography variant="h6">Frameworks</Typography>
          {frameworks.map((skill:any) => skill.name).join(", ")}
        </li>)}
        {languages && (<li>
          <Typography variant="h6">Languages</Typography>
          {languages.map((skill:any) => skill.name).join(", ")}
        </li>)}
        {methods && (<li>
          <Typography variant="h6">Methods</Typography>
          {methods.map((skill:any) => skill.name).join(", ")}
        </li>)}
        {tools && (<li>
          <Typography variant="h6">Tools</Typography>
          {tools.map((skill:any) => skill.name).join(", ")}
        </li>)}
        {databases && (<li>
          <Typography variant="h6">Databases</Typography>
          {databases.map((skill:any) => skill.name).join(", ")}
        </li>)}
        {certifications && (<li>
          <Typography variant="h6">Certifications</Typography>
          {certifications.join(", ")}
        </li>)}
      </ul>
    </Section>
  );
}