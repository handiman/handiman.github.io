import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import { useArray } from '../../Utils';
import { Colors } from '../theme';

const styles = (theme: Theme) => createStyles({
  root: {
    '@media print': {
      display: 'none'
    },
    color: Colors.Grey,
    position: 'fixed',
    zIndex: 1,
    right: theme.spacing(1),
    top: 0,
    height: '100vh',
    display: 'table',
    '& div': {
      padding: 0,
      margin: 0,
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    '& li': {
      cursor: 'pointer',
      textAlign: 'center'
    }
  },
  selected: {
    color: Colors.MediumGreen,
    fontWeight: 'bold'
  }
});

interface SectionIndicatorProps extends WithStyles<typeof styles> {
  onSelect?: (index: number) => void,
  children?: any,
  visibleIndex?: number
}

const SectionIndicatorComponent: React.FC<SectionIndicatorProps> = ({
  visibleIndex = 0,
  children,
  classes,
  onSelect = () => { }
}) => {
  const items = useArray(children);
  const selected = (i: number) => i === visibleIndex;

  return (items.length ? (
    <div className={classes.root}>
      <div>
        <ul>
          {items.map((item: any, i: number) => (
            <li aria-label={item.props?.title} title={item.props?.title} key={i} className={`${selected(i) ? classes.selected : null}`} onClick={() => onSelect(i)}>
              &bull;
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null);
}

export const SectionIndicator = withStyles(styles)(SectionIndicatorComponent);