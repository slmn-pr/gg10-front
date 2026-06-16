export default {
  defaultProps: {
    // dir: 'rtl',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.custom.black,
      paddingLeft: '16px',
      paddingRight: '16px',
      boxShadow: 'none',
      direction: 'rtl',
      '&:before': { display: 'none' },
      '&.Mui-expanded': { margin: 0 },
      '& .MuiAccordionSummary-root': {
        flexDirection: 'row',
        minHeight: 'auto',
        px: 2,
        py: 1,
      },
    }),
  },
};
