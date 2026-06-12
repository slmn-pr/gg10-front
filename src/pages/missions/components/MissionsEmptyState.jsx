import { StarsOutlined } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { missionTabs } from '../mission-config.js';

export const MissionsEmptyState = ({ activeStatus }) => {
  const tabLabel = missionTabs.find((tab) => tab.value === activeStatus)?.label;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={1.5}
      sx={{
        minHeight: 264,
        bgcolor: 'custom.bg2',
        borderRadius: '8px',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          bgcolor: 'rgba(228, 11, 90, 0.12)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <StarsOutlined sx={{ fontSize: 34, color: 'primary.main' }} />
      </Box>
      <Typography variant="sub1" color="custom.white" textAlign="center">
        مأموریتی در بخش {tabLabel} ندارید
      </Typography>
      <Typography variant="caption1" color="custom.grey1" textAlign="center">
        مأموریت‌های جدید بعد از شرکت در لابی‌ها و رویدادها اینجا نمایش داده می‌شوند.
      </Typography>
    </Stack>
  );
};
