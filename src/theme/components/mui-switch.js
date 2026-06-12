export default {
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
};
