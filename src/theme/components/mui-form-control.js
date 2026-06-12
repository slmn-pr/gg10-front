export default {
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      '& .MuiFormHelperText-root': {
        textAlign: 'right',
        display: 'block',
        mt: '4px',
        mx: '16px',
        color: 'white',
        fontSize: theme.typography.sub2.fontSize,
        lineHeight: theme.typography.sub2.lineHeight,
        fontWeight: theme.typography.sub2.fontWeight,
      },

      '& .MuiInputBase-root': {
        paddingLeft: '8px',
      },

      "& input[aria-invalid='false']": {
        borderColor: 'green',
      },
    }),
  },
};
