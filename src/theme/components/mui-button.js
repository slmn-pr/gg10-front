export default {
  defaultProps: {
    dir: 'rtl',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: '8px',
      '&.Mui-disabled': {
        backgroundColor: theme.palette.custom.grey2,
        color: theme.palette.custom.white,
      },
    }),
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
};