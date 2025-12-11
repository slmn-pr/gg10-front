import { createTheme } from '@mui/material/styles';

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
      fontWeight: 500,
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
      fontWeight: 400,
    },
    body2: {
      fontFamily: `'Estedad-FD', sans-serif`,
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
      // Stroke colors
      primaryStroke: '#DD6161',
      blackStroke: '#000000',
      progressStroke: '#262626',
      bottomNavigationGreyLine: '#454545',

      // Lobbies
      dollar: '#00C016',
      prize: '#DBB037',
      glassOnCards: '#1A1D26',
      cardsBg: '#1F1F1F',

      // tags
      tagOnCardPicBg: '#cfcfcf',
      iconsWhite: '#FFFFFF',
      iconsBlack: '#020202',
      tagsBlackBg: '#090406',
      tagsOnCardsPicBg: '#CFCFCF',
      registering: '#00834F',
      live: '#E80000',
      full: '#BE9305',
      finished: '#6D6D6D',
    },

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
    MuiSwitch: {
      defaultProps: {
        dir: 'rtl',
      },
      styleOverrides: {
        root: {
          width: 52,
          height: 32,
          padding: 0,
          display: 'flex',
          marginInlineEnd: 8,
        },

        switchBase: ({ theme }) => ({
          paddingTop: 8,
          transitionDuration: '200ms',

          '&.Mui-checked': {
            transform: 'translateX(20px)',
            color: '#fff',

            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              opacity: 1,
            },

            '& .MuiSwitch-thumb': {
              backgroundColor: '#fff',
            },
          },
        }),

        thumb: {
          width: 16,
          height: 16,
          backgroundColor: '#9e9e9e',
          borderRadius: 100,
        },

        track: {
          borderRadius: 100,
          backgroundColor: '#ffffff',
          border: '2px solid #8a8a8a',
          opacity: 1,
          boxSizing: 'border-box',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        dir: 'rtl',
      },
      styleOverrides: {
        root: { borderRadius: '8px' },
        startIcon: {
          marginRight: -4, // -4px
          marginLeft: '8px',
        },
        endIcon: {
          marginRight: 8,
          marginLeft: -4,
          // margin-right: -4px;
          // margin-left: 8px;
        },
      },
    },
  },
});

export default theme;
