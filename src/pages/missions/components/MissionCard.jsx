import { AccessTimeOutlined, EmojiEventsOutlined } from '@mui/icons-material';
import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material';
import MissionsIcon from '@/components/icons/navigation/MissionsIcon.jsx';
import { missionStatusConfig } from '../mission-config.js';

export const MissionCard = ({ mission }) => {
  const config = missionStatusConfig[mission.status];
  const StatusIcon = config.icon;
  const isDisabled = mission.status === 'expired' || mission.status === 'completed';

  return (
    <Stack
      sx={{
        minHeight: 112,
        bgcolor: 'custom.bg2',
        borderRadius: '8px',
        p: 1.5,
        border: mission.status === 'ready' ? '1px solid rgba(255, 194, 37, 0.48)' : '1px solid transparent',
      }}
      gap={1}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
        <Stack direction="row" alignItems="center" gap={0.75} sx={{ color: config.color, flexShrink: 0 }}>
          <Typography variant="caption2" sx={{ color: config.color }}>
            {config.label}
          </Typography>
          <StatusIcon sx={{ fontSize: 18 }} />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={1} sx={{ minWidth: 0 }}>
          <Stack alignItems="flex-end" gap={0.25} sx={{ minWidth: 0 }}>
            <Typography variant="sub2" color="custom.whiteOnBg2" noWrap>
              {mission.title}
            </Typography>
            <Typography variant="caption2" color="custom.grey1" noWrap>
              {mission.description}
            </Typography>
          </Stack>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '8px',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'rgba(228, 11, 90, 0.12)',
              color: 'primary.main',
              flexShrink: 0,
            }}
          >
            <MissionsIcon color="#E40B5A" />
          </Box>
        </Stack>
      </Stack>

      <Stack gap={0.75}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="caption2" color="custom.grey0">
            {mission.current}
          </Typography>
          <Typography variant="caption2" color="custom.grey1">
            پیشرفت مأموریت
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={mission.progress}
          sx={{
            height: 6,
            borderRadius: 99,
            bgcolor: 'custom.grey5',
            '& .MuiLinearProgress-bar': {
              borderRadius: 99,
              bgcolor: config.color,
            },
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
        <Button
          disabled={isDisabled}
          sx={{
            height: 32,
            minWidth: 104,
            px: 1.5,
            borderRadius: '8px',
            bgcolor: isDisabled ? 'custom.grey4' : mission.status === 'ready' ? 'custom.warning' : 'primary.main',
            color: isDisabled || mission.status === 'ready' ? 'custom.black' : 'custom.white',
            '&:hover': {
              bgcolor: mission.status === 'ready' ? 'custom.warning' : 'primary.dark',
            },
          }}
        >
          <Typography variant="caption1">{config.action}</Typography>
        </Button>
        <Stack direction="row" alignItems="center" gap={1}>
          <Stack direction="row" alignItems="center" gap={0.4}>
            <Typography variant="caption2" color="custom.prize">
              {mission.reward}
            </Typography>
            <EmojiEventsOutlined sx={{ fontSize: 16, color: 'custom.prize' }} />
          </Stack>
          <Stack direction="row" alignItems="center" gap={0.4}>
            <Typography variant="caption2" color="custom.grey1">
              {mission.time}
            </Typography>
            <AccessTimeOutlined sx={{ fontSize: 16, color: 'custom.grey1' }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
