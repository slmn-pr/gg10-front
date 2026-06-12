export default {
  styleOverrides: {
    root: {
      '& .MuiBackdrop-root': {
        backdropFilter: 'blur(2px)',
      },
      '& > .MuiBox-root': {
        border: 'none',
        outline: 'none',
      },
    },
  },
};