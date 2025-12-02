import IconButton from '@mui/material/IconButton';

const MDIconButton = ({ glow = false, ...props }) => (
  <IconButton
    size="large"
    sx={{
      borderRadius: (theme) => theme.shape.custom.medium,
      backgroundColor: (theme) => theme.vars.palette.surfaceContainer,
      color: (theme) => theme.vars.palette.onSurface,
      boxShadow: glow
        ? '0 0 16px rgba(142, 124, 255, 0.4), inset 0 0 6px rgba(142, 124, 255, 0.3)'
        : 'none',
      '&:hover': {
        backgroundColor: (theme) => theme.vars.palette.surfaceVariant,
      },
    }}
    {...props}
  />
);

export default MDIconButton;
