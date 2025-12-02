import Box from '@mui/material/Box';

const MDSurfaceContainer = ({ elevation = 0, gradient, sx, ...props }) => (
  <Box
    sx={{
      borderRadius: (theme) => theme.shape.custom.large,
      background:
        gradient ??
        ((theme) =>
          `linear-gradient(135deg, ${theme.vars.palette.surfaceContainer}, ${theme.vars.palette.surface})`),
      boxShadow: (theme) => theme.shadows[elevation],
      p: 3,
      ...sx,
    }}
    {...props}
  />
);

export default MDSurfaceContainer;
