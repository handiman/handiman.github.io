import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';

const styles = (theme: Theme) => createStyles({
  root: {
    '@media print': {
      display: 'none'
    },
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: `calc(100vh - ${theme.spacing(2) + theme.typography.fontSize * 2}px)`,
    width: '100%',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
    fontSize: theme.typography.fontSize * 2,
    '& > i': {
      cursor: 'pointer',
      opacity: 0.5,
      '&:hover': {
        opacity: 1,
      }
    }
  },
  disabled: {
    '& > i': {
      cursor: 'default',
      opacity: 0.5,
      '&:hover': {
        opacity: 0.5
      }
    }
  }
})

export interface BigPagingButtonProps extends WithStyles<typeof styles> {
  onClick?: () => void,
  disabled?: boolean
}

const BigPagingButtonComponent: React.FC<BigPagingButtonProps> = ({ onClick, disabled, classes }) => (
  <div className={disabled ? `${classes.root} ${classes.disabled}` : classes.root}>
    <i className="fas fa-angle-down" onClick={onClick}></i>
  </div>
);

export const BigPagingButton = withStyles(styles)(BigPagingButtonComponent);