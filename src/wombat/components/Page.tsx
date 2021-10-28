import { Box, createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { SectionProps } from '.';

const PageStyles = createStyles({
  root: {
    width: '100%',
    minHeight: '100vh'
  },
  centerVertically: {
    display: 'table',
    width: '100%',
    minHeight: '100vh',
   '& > div': {
      display: 'table-cell',
      verticalAlign: 'middle'
    }
  }
})

export interface PageProps extends SectionProps, WithStyles<typeof PageStyles> {
  children?: any,
  className?: string,
  centerVertically?: boolean,
  component?: any
}

const PageComponent: React.FC<PageProps> = ({ children, classes, centerVertically = false, component = 'div' }) => {

  return (
    <Box component={component} className={classes.root}>
      <div className={centerVertically ? classes.centerVertically : ''}>
        <div>{children}</div>
      </div>
    </Box>
  );
}

export const Page = withStyles(PageStyles)(PageComponent);