import React from 'react';
import { Table, TableBody, makeStyles, TableRow, TableCell, Typography } from '@material-ui/core';
import { Section } from '../../components';
import { LANGUAGES } from '../Layout';

const useStyles = makeStyles(_ => ({
  leftColumn: {
    paddingLeft: 0,
    width: 140,
    border: 0
  },
  rightColumn: {
    border: 0
  },
  section:{
    backgroundColor:LANGUAGES
  }
}));

export default (props: { languages: any }) => {
  const { languages } = props;
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Typography variant="h2" className="no-print">I can communicate</Typography>
      <Typography variant="h2" className="print">Languages</Typography>

      <Table size="small">
        <TableBody>
          {languages.map((language: any, index: number) => (
            <TableRow key={index}>
              <TableCell className={classes.leftColumn}>{language.name}</TableCell>
              <TableCell className={classes.rightColumn}>{language.proficiency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}