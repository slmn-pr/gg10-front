import CustomProgressBar from '@/components/CustomProgressBar';
import CapacityIcon from '@/components/icons/CapacityIcon';
import LeadingIcon from '@/components/icons/LeadingIcon';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import PrizeIcon from '@/components/icons/lobbie/PrizeIcon';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
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
      <Stack direction="row" justifyContent="flex-end">
        <Stack alignItems="flex-end" sx={{ flex: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.25}
            sx={{ width: '100%' }}
          >
            <Typography
              variant="sub2"
              color={theme.palette.custom.whiteOnBg2}
              sx={{ direction: 'ltr' }}
            >
              {formattedTime}
            </Typography>
            <TimeIcon color={theme.palette.custom.iconsWhite} />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.25}
            sx={{ width: '100%' }}
          >
            {/* <Typography variant="sub2" color={theme.palette.custom.greyOnBg1}>
              {registeredCount}/{capacity}
            </Typography> */}
            <CapacityIcon color={theme.palette.custom.greyOnBg1} />
          </Stack>
        </Stack>

        <Stack alignItems="flex-end">
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography
              variant="sub2"
              color={theme.palette.custom.dollar}
              sx={{ display: 'flex', gap: 0.5, direction: 'rtl' }}
            >
              <span>ورودی:</span>
              {/* <span>{formattedEntryFee} تومن</span> */}
            </Typography>
            <EntryFreeIcon />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography
              variant="sub2"
              color={theme.palette.custom.prize}
              sx={{ display: 'flex', gap: 0.5, direction: 'rtl' }}
            >
              <span>جایزه:</span>
              {/* <span>{formattedPrize} تومن</span> */}
            </Typography>
            <PrizeIcon />
          </Stack>
        </Stack>
      </Stack>

      <Box mt="1.5px">
        <CustomProgressBar progress={0} />
      </Box>

      <Divider sx={{ my: 0.5, background: theme.palette.stroke.black, height: '2px' }} />

      {/* Tags */}
      {/* TODO: Fix tags render from  API */}
      {/* <Stack
            direction="row"
            spacing={0.5}
            sx={{ justifyContent: 'flex-end' }}
            mb={0.25}
          >
            {tags.slice(0, 3).map((tag, index) => (
              <LobbyCardTag key={`${tag}-${index}`} title={tag} icon={tagIcons[tag]} />
            ))}
          </Stack> */}
    </Box>
  );
}
