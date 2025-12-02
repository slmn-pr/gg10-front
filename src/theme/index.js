import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D90251',
      light: '#FF3F7C',
      dark: '#A9023F',
      contrastText: '#FFFFFF',
    },
    // Custom palette extensions
    custom: {
      // Primary shades
      shade1: '#A9023F',
      shade2: '#79012D',
      shade3: '#48011B',
      shade4: '#180009',
      // Primary tints
      tint1: '#FFDFEB',
      tint2: '#FFC4C4',
      tint3: '#FF3F7C',
      tint4: '#E40B5A',
      // Primary text colors
      whiteOnPrimary: '#FFFFFF',
      blackOnPrimary: '#020202',
      // Main backgrounds
      bg1: '#131313', // Meshki
      bg2: '#212121', // Zoghali
      bg3: '#FFFFFF', // White
      // On Background 1 colors
      whiteOnBg1: '#FFFFFF',
      greyOnBg1: '#A4A4A4',
      // On Background 2 colors
      whiteOnBg2: '#F9F9F9',
      greyOnBg2: '#D0D0D0',
      disabledGreyOnBg2: '#8A8A8A',
      primaryOnBg2: '#E40B5A',
      // Component backgrounds
      modalBg: '#161616',
      progressBarBg: '#171717',
      // State colors
      error: '#DA0606',
      onError: '#FFFFFF',
      info: '#FFDFEB',
      onInfo: '#020202',
      success: '#02C28B',
      onSuccess: '#020202',
      warning: '#FFC225',
      onWarning: '#020202',
      deleteOnModal: '#FF3333',
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
    },
    // Text colors
    text: {
      primary: '#FFFFFF',
      secondary: '#A4A4A4',
      disabled: '#8A8A8A',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#131313',
        },
      },
    },
  },
});

export default theme;