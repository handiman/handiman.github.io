import React from 'react';
import { Section } from '../../../components';
import { Typography, Table, TableRow, TableCell, makeStyles } from '@material-ui/core';
import { EDUCATION } from '../../../Theme';

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
    backgroundColor:EDUCATION
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
        {education.map((education:any, index:number) => (
          <TableRow key={index}>
            <TableCell className={classes.leftColumn}>
              {education.from}{education.to && (<>- {education.to}</>)}
            </TableCell>
            <TableCell className={classes.rightColumn}>
              {education.school}
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Section>
  );
}