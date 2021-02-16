import React, { useEffect, useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import { useArray } from '../../Utils';
import { Colors } from '../theme';

const styles = (theme: Theme) => createStyles({
  root: {
    '@media print': {
      display: 'none'
    }
  },
  table: {
    position: 'fixed',
    zIndex: 1,
    bottom: 0,
    textAlign: 'center',
    mixBlendMode: 'exclusion',
    width: '100%',
    '& > div > div': {
      margin: 'auto',
      display: 'table',
      '& > div': {
        textAlign: 'center',
        display: 'table-cell',
        padding: theme.spacing(1),
        cursor: 'pointer',
        '&:nth-of-type(2)': {
          cursor: 'none',
        }
      }
    }
  },
  disabled: {
    cursor: 'default'
  },
  nav: {
    position: 'fixed',
    zIndex: 1,
    bottom: 0,
    textAlign: 'center',
    width: '100%',
    display: 'none',
    marginBottom: theme.typography.fontSize * 2.5,
    '& > div': {
      display: 'table-cell',
      '& > ul': {
        maxWidth: 150,
        border: `1px solid ${Colors.LightGrey}`,
        backgroundColor: Colors.White,
        color: Colors.Black,
        margin: 'auto'
      }
    }
  }
});

interface SectionNavigatorProps extends WithStyles<typeof styles> {
  onNext?: () => void,
  onPrev?: () => void,
  children?: any,
  visibleIndex?: number
}

const SectionNavigatorComponent: React.FC<SectionNavigatorProps> = ({
  visibleIndex = 0,
  children,
  classes,
  onNext = () => { },
  onPrev = () => { }
}) => {
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
  const items = useArray(children).map((child: any, _: any) => ({ ...child.props }));

  useEffect(() => {
    setFirst(visibleIndex <= 0);
    setLast(visibleIndex >= items.length - 1);
  }, [visibleIndex]);

  return (items.length ? (
    <div className={classes.root}>
      <div className={classes.table}>
        <div>
          <div>
            <div aria-label="Previous section" title="Previous" onClick={onPrev} className={first ? classes.disabled : ''}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div>
              {visibleIndex + 1}/{items.length}
            </div>
            <div aria-label="Next section" title="Next" onClick={onNext} className={last ? classes.disabled : ''}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null);
}

export const SectionNavigator = withStyles(styles)(SectionNavigatorComponent);