import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { Colors } from '.';

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: Colors.White,
      secondary: Colors.Black
    },
    background: {
      default: Colors.Black,
      paper: Colors.White
    },
    primary: {
      main: Colors.LightGreen
    },
    secondary: {
      main: Colors.LightGreen
    },
    success: {
      main: Colors.LightGreen
    }
  },
  typography: {
    fontFamily: ['\'Open Sans\'', 'sans-serif'].join(','),
    allVariants: {
      fontWeight: 'lighter'
    },
    caption: {
      fontWeight: 'bold'
    }
  },
  props: {
    MuiButton: {
      disableElevation: true
    },
    MuiPaper: {
      square: true,
      elevation: 0
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        color: Colors.Black
      }
    },
    MuiInputBase: {
      root: {
        color: 'inherit',
        backgroundColor: 'transparent'
      }
    },
    MuiOutlinedInput: {
      root: {
        '& fieldset': {
          borderColor: Colors.LightGrey
        },
        '&:hover fieldset': {
          borderColor: `${Colors.LightGreen} !important`
        }
      }
    }
  }
}));