import { Box, Typography } from '@mui/material';

export default function CustomTag({ title, icon }) {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 0.5,
        borderRadius: "2px",
        backgroundColor: 'custom.tagsBlackBg',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
      }}
    >
      <Typography
        variant="caption2"
        sx={{ color: 'custom.iconsWhite', fontSize: '0.75rem', fontWeight: 500 }}
      >
        {title}
      </Typography>
      {icon}
    </Box>
  );
}
