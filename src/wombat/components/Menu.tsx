import React from 'react';
import { createStyles, Link, Theme, WithStyles, withStyles } from '@material-ui/core';
import { GetApp, GitHub, LinkedIn, Mail } from '@material-ui/icons';

const iconSize = 'small';

const styles = (theme: Theme) => createStyles({
  root: {
    '@media print': {
      display: 'none'
    },
    mixBlendMode: 'exclusion',
    position: 'fixed',
    left: theme.spacing(1),
    top: 0,
    height: '100vh',
    display: 'table',
    '& div': {
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    '& ul': {
      '& > li': {
        cursor: 'pointer',
        textAlign: 'center',
        '& a, i': {
          color: 'inherit'
        }
      }
    }
  }
})

interface MenuProps extends WithStyles<typeof styles> {
  showContactForm?: () => void
}

const MenuComponent: React.FC<MenuProps> = ({ classes, showContactForm }) => {
  return (
    <div className={classes.root}>
      <div>
        <ul>
          <li onClick={showContactForm} aria-label="Contact form" title="Contact me">
            <Mail fontSize={iconSize} />
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/prettygoodprogrammer" aria-label="LinkedIn" title="Look me up on LinkedIn" color="inherit">
              <LinkedIn fontSize={iconSize} />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/handiman" aria-label="GitHub" title="Check out how I code" color="inherit">
              <GitHub fontSize={iconSize} />
            </Link>
          </li>
          {/* <li>
            <Link href="/assets/henrik-becker.docx" aria-label="Resumé in Word format" title="Download my resumé in Word format" color="inherit">
              <GetApp fontSize={iconSize} />
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export const Menu = withStyles(styles)(MenuComponent);
