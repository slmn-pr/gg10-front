import { Box, Stack, Typography } from '@mui/material';

export const MissionsBanner = () => (
  <Box
    sx={{
      width: 'calc(100% - 32px)',
      height: 120,
      mt: 2,
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative',
      bgcolor: '#280032',
      background: 'linear-gradient(135deg, #280032 0%, #48011B 48%, #D90251 100%)',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        left: -34,
        bottom: -58,
        width: 150,
        height: 150,
        borderRadius: '50%',
        border: '28px solid rgba(255, 255, 255, 0.08)',
      }}
    />
    <Stack
      alignItems="flex-end"
      justifyContent="center"
      gap={0.5}
      sx={{ position: 'relative', zIndex: 1, height: '100%', px: 2 }}
    >
      <Typography variant="title3" color="custom.white">
        مأموریت‌های GG10
      </Typography>
      <Typography variant="caption1" color="custom.grey0">
        مأموریت‌ها را کامل کن و جایزه بگیر.
      </Typography>
    </Stack>
  </Box>
);
