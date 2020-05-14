import React from 'react';
import { Section } from '..';
import { Typography, Table, TableRow, TableCell, makeStyles, TableBody } from '@material-ui/core';
import { EDUCATION } from '../Layout';

const useStyles = makeStyles(_ => ({
  leftColumn: {
    paddingLeft: 0,
    width: 140,
    border: 0
  },
  rightColumn: {
    border: 0
  },
  section: {
    backgroundColor: EDUCATION
  }
}));

export default (props: { education: any }) => {
  const { education } = props;
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Typography variant="h2" className="no-print">I went school</Typography>
      <Typography variant="h2" className="print">Education</Typography>
      <Table size="small">
        <TableBody>
          {education.map((education: any, index: number) => (
            <TableRow key={index}>
              <TableCell className={classes.leftColumn}>
                {education.from}{education.to && (<>- {education.to}</>)}
              </TableCell>
              <TableCell className={classes.rightColumn}>
                {education.school}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}