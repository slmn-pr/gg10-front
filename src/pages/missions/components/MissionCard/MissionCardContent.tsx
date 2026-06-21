import CustomProgressBar from '@/components/CustomProgressBar';
import CapacityIcon from '@/components/icons/CapacityIcon';
import LeadingIcon from '@/components/icons/LeadingIcon';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import PrizeIcon from '@/components/icons/lobbie/PrizeIcon';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import ProgressIcon from '@/components/icons/ProgressIcon';
import useFormatDate from '@/hooks/useFormatDate';
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';

interface MissionCardContentProps {
  title: string;
  description: string;
  time?: string;
  prize?: string;
  progress?: number;
  eliminateTime?: string;
}

export default function MissionCardContent({
  description,
  title,
  time,
}: MissionCardContentProps) {
  const theme = useTheme();

  const formattedTime = useFormatDate(time);

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
      {/* Title & description row */}
      <Stack>
        <Typography variant="sub1">{title}</Typography>
        <Typography variant="caption2">{description}</Typography>
      </Stack>

      {/* Info Grid */}
      <Stack alignItems="flex-end">
        {/* Prize text */}
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography
            variant="sub2"
            color={theme.palette.custom.prize}
            sx={{ display: 'flex', gap: 0.5, direction: 'rtl' }}
          >
            <span>جایزه:</span>
            <span>50,000 تومن اعتبار کیف پول</span>
          </Typography>
          <PrizeIcon />
        </Stack>

        {/* Pogress & eliminate time */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ direction: 'rtl', width: '100%' }}
        >
          {/* Pogress */}
          <Stack direction="row" alignItems="center" gap={0.5}>
            <ProgressIcon color="#D90251" />

            <Typography
              variant="sub2"
              color={theme.palette.primary.main}
              sx={{ display: 'flex', gap: 0.5, direction: 'rtl' }}
            >
              <span>پیشرفت ماموریت:</span>
              <span>0/1</span>
            </Typography>
          </Stack>

          {/* Eliminate time */}
          <Stack direction="row" alignItems="center">
            <TimeIcon color={theme.palette.custom.grey2} />

            <Typography
              variant="sub2"
              color={theme.palette.custom.grey2}
              sx={{ display: 'flex', gap: 0.5, direction: 'rtl' }}
            >
              <span>2 روز مانده</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box mt="1.5px">
        <CustomProgressBar progress={0} />
      </Box>
    </Box>
  );
}
