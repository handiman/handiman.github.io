import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Colors } from '.';

const lists = (_: Theme) => createStyles({
  '& ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
});

const typography = (theme: Theme) => createStyles({
  '& h1, header': {
    ...theme.typography.h1,
    fontFamily: 'Open Sans'
  },
  '& h2, section header, aside header, .content header': {
    ...theme.typography.h2,
    fontFamily: 'Open Sans'
  },
  '& h3': {
    ...theme.typography.h3,
    fontFamily: 'Open Sans'
  },
  '& h4': {
    ...theme.typography.h4,
    fontFamily: 'Open Sans'
  },
  '& h5': {
    ...theme.typography.h5,
    fontFamily: 'Open Sans'
  },
  '& h6': {
    ...theme.typography.h6,
    fontFamily: 'Open Sans',
  }
});


const print = (_: Theme) => createStyles({
  '@media print': {
    '& .noPrint, .buttonDown, footer': {
      display: 'none'
    },
    '& a, a:link, a:visited, a:hover, a:active': {
      color: `${Colors.Black} !important`
    }
  }
});

const screen = {
  '@media screen': {
    '& .print': {
      display: 'none'
    }
  }
}

export const styles = (theme: Theme) => createStyles({
  root: {
    ...screen,
    ...lists(theme),
    ...typography(theme),
    ...print(theme),
    fontFamily: 'Open Sans',
    '& div, section, header, ul, li, nav, p': {
      boxSizing: 'border-box'
    },
    '& .MuiPaper-root': {
      '&:last-child': {
        paddingBottom: theme.spacing(5)
      }
    },
    [theme.breakpoints.down('md')]: {
      '& #section-0, .MuiPaper-root': {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  }
});

export const useStyles = makeStyles(styles);