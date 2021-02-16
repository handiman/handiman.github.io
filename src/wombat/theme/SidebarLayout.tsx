import React from 'react';
import { createStyles, Paper, Theme, WithStyles, withStyles } from '@material-ui/core';

const headers = (theme: Theme) => createStyles({
  '& h1': {
    ...theme.typography.h3
  },
  '& h2': {
    ...theme.typography.h4
  },
  '& h4, .experience header': {
    ...theme.typography.h5
  },
  '& aside header, .content header': {
    ...theme.typography.h3
  }
})

const styles = (theme: Theme) => createStyles({
  root: {
    ...headers(theme),
    position: 'relative',
    width: '100%',
    '& > aside, .content': {
      boxSizing: 'border-box',
      minHeight: '100vh',
      height: '100%',
      padding: theme.spacing(4),
      '& .MuiContainer-root': {
        padding: 0
      }
    },
    '& > aside': {
      position: 'fixed',
      zIndex: 1,
      width: 420,
      '& > header': {
        marginBottom: theme.spacing(4)
      }
    },
    '& > .content': {
      marginLeft: 420,
      '& > section': {
        marginBottom: theme.spacing(4)
      }
    }
  }
});

interface SidebarLayoutProps extends WithStyles<typeof styles> {
  aside?: any,
  children?: any
}

const SidebarLayoutComponent: React.FC<SidebarLayoutProps> = ({ aside, children, classes }) => {

  return (
    <div className={classes.root}>
      <aside>
        {aside}
      </aside>
      <Paper className="content">
        {children}
      </Paper>
    </div>
  )
}

export const SidebarLayout = withStyles(styles)(SidebarLayoutComponent);