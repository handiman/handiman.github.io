import React from 'react';
import { Box, createStyles, Link, Theme, withStyles, WithStyles } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { Colors } from '../theme';
import { useArray } from '../../Utils';
import { ContactForm } from '.';

const iconSize = "small";

const styles = (theme: Theme) => createStyles({
  root: {
    color: Colors.White,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    '& a': {
      color: 'inherit'
    },
    '& form, > div, & > ul > li': {
      marginBottom: theme.spacing(2)
    },
    '& li': {
      cursor: 'pointer',
      display: 'inline-block',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    }
  },
  delimited: {
    '& li': {
      borderRightWidth: 1,
      borderRightStyle: 'solid',
      '&:last-child': {
        borderRightStyle: 'none'
      }
    }
  }
})

interface FooterProps extends WithStyles<typeof styles> {
  onSelect?: (i: number) => void,
  children?: any
}

const FooterComponent: React.FC<FooterProps> = ({
  children,
  classes,
  onSelect = () => { }
}) => {
  const print = () => {
    setTimeout(() => window.print(), 0);
  };

  return (
    <Box component="footer" textAlign="center" className={classes.root}>
      <ContactForm title="Contact Me" />
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/prettygoodprogrammer" aria-label="LinkedIn">
            <LinkedIn fontSize={iconSize} />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/handiman" aria-label="GitHub">
            <GitHub fontSize={iconSize} />
          </Link>
        </li>
      </ul>
      <ul className={classes.delimited}>
        {useArray(children).map((item: any, i: number) => {
          return item.props?.title ? (
            <li aria-label={item.props.title} key={i} onClick={() => onSelect(i)}>
              {item.props.title}
            </li>
          ) : null;
        })}
      </ul>
      <div className={classes.delimited}>
        <span>My resumé is also available in these formats: </span>
        <ul style={{ display: 'inline' }}>
          <li><Link href="/assets/henrik-becker.pdf">PDF</Link></li>
          <li><Link href="/assets/henrik-becker.docx">Word</Link></li>
          <li><Link href="/assets/henrik-becker.txt">Markdown</Link></li>
          <li><Link href="/assets/henrik-becker.json">JSON</Link></li>
        </ul>
      </div>
      <div>Copyright &copy; {new Date().getFullYear()} Henrik Becker</div>
      <div>Thanks for visiting!</div>
    </Box>
  );
}

export const Footer = withStyles(styles)(FooterComponent);