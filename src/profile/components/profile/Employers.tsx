import React from 'react';
import { Table, TableBody, TableCell, TableRow, makeStyles, Typography } from '@material-ui/core';
import { Section } from '../../components';
import { EMPLOYERS } from '../Layout';

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
    backgroundColor:EMPLOYERS
  }
}));

export default (props: { employers: any }) => {
  const { employers } = props;
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Typography variant="h2" className="no-print">I've been around</Typography>
      <Typography variant="h2" className="print">Employment History</Typography>
      <Table size="small">
        <TableBody>
          {employers.map((employer: any, index: number) => (
            <TableRow key={index}>
              <TableCell className={classes.leftColumn}>{employer.from} - {employer.to}</TableCell>
              <TableCell className={classes.rightColumn}>{employer.title} at {employer.organization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}