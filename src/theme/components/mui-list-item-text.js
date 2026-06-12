export default {
  styleOverrides: {
    root: ({ theme }) => ({
      direction: 'rtl',
      display: 'list-item',

      '& .MuiTypography-root': {
        fontSize: theme.typography.sub2.fontSize,
        lineHeight: theme.typography.sub2.lineHeight,
        fontWeight: theme.typography.sub2.fontWeight,
      },
    }),
  },
};