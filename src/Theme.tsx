import { createMuiTheme } from '@material-ui/core/styles';

export const GREEN = '#75a434';
export const WHITE = '#FFFFFF';
export const BLACK = '#191A1A';
export const FULL_BLACK = '#000000';
export const GREY = '#595959';
export const LIGHT_GREY = '#929292';
export const MEDIUM_GREY = '#737373';
export const DARK_GREY = '#3D3D3D';

export const SUMMARY = FULL_BLACK;
export const SKILLS = BLACK;
export const FOOTER = BLACK;
export const INTERESTS = GREEN;
export const RECOMMENDATIONS = DARK_GREY;
export const PROJECTS = DARK_GREY;
export const LANGUAGES = MEDIUM_GREY;
export const EDUCATION = LANGUAGES;
export const EMPLOYERS = LIGHT_GREY;

export const HEADER_BACKGROUND_IMAGE = '/static/images/horizon-4.jpg';
export const ASIDE_BACKGROUND_IMAGE = '/static/images/hat-head.jpg'
export const INTERESTS_BACKGROUND_IMAGE = '/static/images/interests_gray.png';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: BLACK
    },
    primary: {
      main: GREEN
    },
    secondary: {
      main: BLACK
    }
  },
  typography: {
    fontSize: 14
  },
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: FULL_BLACK
      }
    },
    MuiCard: {
      root: {
        backgroundColor: DARK_GREY
      }
    }
  },
  props: {
    MuiButton: {
      disableElevation: true
    }
  }
});
