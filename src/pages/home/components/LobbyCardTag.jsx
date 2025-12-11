import { Box, Typography, useTheme } from '@mui/material';

export default function LobbyCardTag({ title, icon }) {
  const theme = useTheme();
  const color = theme.palette.custom.iconsWhite;
  return (
    <Box
      sx={{
        px: 1,
        borderRadius: '2px',
        backgroundColor: theme.palette.custom.tagsBlackBg,
        border: `1px solid ${theme.palette.stroke.black}`,
        display: 'flex',
        alignItems: 'center',
        height: '20px',
      }}
    >
      <Typography variant="caption2" sx={{ color: theme.palette.custom.iconsWhite }}>
        {title}
      </Typography>
      {icon}
    </Box>
  );
}
