export default {
  styleOverrides: {
    root: ({ theme }) => ({
      '& > .MuiPaper-root ': {
        padding: '16px',
        maxWidth: theme.breakpoints.values.sm,
        width: '100%',
        marginInline: 'auto',
        backgroundColor: theme.palette.custom.grey7,
        backgroundImage: 'none',
        // borderRadius: '16px 16px 0 0',
      },
    }),
  },
};