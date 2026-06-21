import CustomProgressBar from '@/components/CustomProgressBar';
import PrizeIcon from '@/components/icons/lobbie/PrizeIcon';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import ProgressIcon from '@/components/icons/ProgressIcon';
import useFormatDate from '@/hooks/useFormatDate';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import type { MissionResponse } from '@/api/missions/missions';

interface MissionCardContentProps {
  title: string;
  description: string;
  reward: string;
  progress: number;
  goal: number;
  expiresAt?: string | null;
  state: MissionResponse['state'];
}

export default function MissionCardContent({
  title,
  description,
  reward,
  progress,
  goal,
  expiresAt,
  state,
}: MissionCardContentProps) {
  const theme = useTheme();

  const formattedExpiry = useFormatDate(expiresAt ?? undefined);

  const timeLabel = useMemo(() => {
    if (state === 'expired') return 'منقضی شده';
    if (state === 'completed') return 'دریافت شده';
    if (!expiresAt) return '—';
    return formattedExpiry;
  }, [state, expiresAt, formattedExpiry]);

  const progressPercent =
    goal > 0 ? Math.min(100, Math.round((progress / goal) * 100)) : 0;

  return (
    <Box
      sx={{
        flex: 1,
        px: 1,
        py: 0.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Title & description */}
      <Stack>
        <Typography variant="sub1">{title}</Typography>
        <Typography variant="caption2">{description}</Typography>
      </Stack>

      {/* Info Grid */}
      <Stack alignItems="flex-end">
        {/* Reward */}
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography
            variant="sub2"
            color={theme.palette.custom.prize}
            sx={{ display: 'flex', gap: 0.5, direction: 'rtl' }}
          >
            <span>جایزه:</span>
            <span>{reward} تومان اعتبار کیف پول</span>
          </Typography>
          <PrizeIcon />
        </Stack>

        {/* Progress & expiry */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ direction: 'rtl', width: '100%' }}
        >
          <Stack direction="row" alignItems="center" gap={0.5}>
            <ProgressIcon color="#D90251" />
            <Typography
              variant="sub2"
              color={theme.palette.primary.main}
              sx={{ display: 'flex', gap: 0.5, direction: 'rtl' }}
            >
              <span>پیشرفت ماموریت:</span>
              <span>
                {progress} / {goal}
              </span>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <TimeIcon color={theme.palette.custom.grey2} />
            <Typography
              variant="sub2"
              color={theme.palette.custom.grey2}
              sx={{ display: 'flex', gap: 0.5, direction: 'ltr' }}
            >
              <span>{timeLabel}</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box mt="1.5px">
        <CustomProgressBar progress={progressPercent} />
      </Box>
    </Box>
  );
}
