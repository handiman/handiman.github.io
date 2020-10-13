import { createMuiTheme } from "@material-ui/core";

// Neucha, Chilanka, Schoolbell, Shadows Into Light Two

const linkColor = '#e9e9e9';
const textColor = '#b8b6d3';
const backgroundColor = '#101010';

const Theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: backgroundColor
    },
    text: {
      primary: textColor
    }
  },
  typography: {
    fontFamily: [
      'Neucha',
      'monospace',
      'sans-serif'
    ].join(','),
    fontSize: 18
  },
  overrides: {
    MuiAppBar: {
      root: {
        opacity: .85
      },
      colorSecondary: {
        backgroundColor: backgroundColor,
        color: textColor
      }
    },
    MuiButton: {
      root: {
        fontSize: 14,
        margin: 0,
        textTransform: 'none'
      },
      label: {
        color: textColor
      }
    },
    MuiIconButton: {
      label: {
        color: textColor
      }
    },
    MuiLink: {
      root: {
        color: linkColor,
        '&:hover': {
          textDecoration: 'none!important'
        }
      }
    }
  }
});

export default Theme;