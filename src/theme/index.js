import { createTheme } from '@mui/material/styles';
import { CUSTOM_PALLETE } from './custom-pallete';
import muiSwitch from './components/mui-switch';
import muiButton from './components/mui-button';
import muiTypography from './components/mui-typography';
import muiSnackbar from './components/mui-snackbar';
import muiAccordion from './components/mui-accordion';
import muiModal from './components/mui-modal';
import muiFormControl from './components/mui-form-control';
import muiTextField from './components/mui-text-field';
import muiListItem from './components/mui-list-item';
import muiListItemText from './components/mui-list-item-text';
import muiLink from './components/mui-link';
import muiDrawer from './components/mui-drawer';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 440,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: `'Estedad-FD', sans-serif`,
    // Custom typography variants
    title1: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '40px',
    },
    title2: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '36px',
    },
    title3: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '32px',
    },
    sub1: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '28px',
    },
    sub2: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '24px',
    },
    sub3: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 600,
      fontSize: '10px',
      lineHeight: '20px',
    },
    // Standard MUI variants
    h1: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 700,
    },
    h2: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 700,
    },
    h3: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 600,
    },
    h4: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 600,
    },
    h5: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 500,
    },
    h6: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 500,
    },
    button: {
      fontFamily: `'Estedad-FD', sans-serif`,
      textTransform: 'none',
      fontWeight: 500,
    },
    button1: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontSize: '16px',
      lineHeight: '32px',
      fontWeight: 500,
    },
    button2: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontSize: '12px',
      lineHeight: '24px',
      fontWeight: 500,
    },
    body1: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontSize: '20px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    body2: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontSize: '16px',
      lineHeight: '32px',
      fontWeight: 400,
    },
    body3: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontSize: '14px',
      lineHeight: '28px',
      fontWeight: 400,
    },
    caption1: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '24px',
    },
    caption2: {
      fontFamily: `'Estedad-FD', sans-serif`,
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '20px',
    },
    eng_numbers_bold: {
      fontFamily: `'Estedad-VF', sans-serif`,
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '32px',
    },
    eng_numbers_regular: {
      fontFamily: `'Estedad-VF', sans-serif`,
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '32px',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#D90251',
      light: '#FF3F7C',
      dark: '#A9023F',
      contrastText: '#FFFFFF',
    },
    // Custom palette extensions
    custom: CUSTOM_PALLETE,

    stroke: {
      primary: '#DD6161',
      black: '#000000',
      progressbar: '#262626',
      bottomNavigationGreyLine: '#454545',
    },

    // Standard MUI error, success, warning, info
    error: {
      main: '#DA0606',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#02C28B',
      contrastText: '#020202',
    },
    warning: {
      main: '#FFC225',
      contrastText: '#020202',
    },
    info: {
      main: '#FFDFEB',
      contrastText: '#020202',
    },
    // Background colors
    background: {
      default: '#131313', // bg1
      paper: '#212121', // bg2
      progressbarBg: '#171717',
    },
    // Text colors
    text: {
      primary: '#FFFFFF',
      secondary: '#A4A4A4',
      disabled: '#8A8A8A',
    },
  },
  components: {
    MuiFormControlLabel: {
      defaultProps: {
        dir: 'rtl',
      },
    },
    MuiSwitch: muiSwitch,
    MuiButton: muiButton,
    MuiTypography: muiTypography,
    MuiSnackbar: muiSnackbar,
    MuiAccordion: muiAccordion,
    MuiModal: muiModal,
    MuiFormControl: muiFormControl,
    MuiTextField: muiTextField,
    MuiListItem: muiListItem,
    MuiListItemText: muiListItemText,
    MuiLink: muiLink,
    MuiDrawer: muiDrawer,
  },
});

export default theme;
