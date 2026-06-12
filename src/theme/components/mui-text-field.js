export default {
  styleOverrides: {
    root: ({ theme }) => ({
      direction: 'rtl',
      textAlign: 'right',
      // backgroundColor: 'white',
      color: theme.palette.custom.grey3,
      '& .MuiInputBase-root': {
        backgroundColor: 'white',
        color: theme.palette.custom.grey3,

        // font variant -> title3
        fontSize: theme.typography.title3.fontSize,
        lineHeight: theme.typography.title3.lineHeight,
        fontWeight: theme.typography.title3.fontWeight,
      },
    }),
  },
};