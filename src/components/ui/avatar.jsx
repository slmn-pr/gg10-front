import Avatar from '@mui/material/Avatar';

const MDAvatar = ({ size = 48, gradient, ...props }) => (
  <Avatar
    sx={{
      width: size,
      height: size,
      borderRadius: (theme) => theme.shape.custom.large,
      background:
        gradient ??
        ((theme) =>
          `linear-gradient(135deg, ${theme.vars.palette.surfaceVariant}, ${theme.vars.palette.surfaceContainer})`),
      color: (theme) => theme.vars.palette.onSurface,
      fontWeight: 700,
    }}
    {...props}
  />
);

export default MDAvatar;
