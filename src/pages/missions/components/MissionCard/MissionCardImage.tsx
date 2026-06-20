import GoldSmallIcon from '@/components/icons/rank/GoldSmallIcon';
import LegendSmallIcon from '@/components/icons/rank/LegendSmallIcon';
import SilverSmallIcon from '@/components/icons/rank/SilverSmallIcon';
import { getStatusPalette } from '@/pages/home/utils';
import { LOBBY_STATUS } from '@/pages/lobby/constants/lobbyStatus';
import { alpha, Box, Stack, Typography, useTheme } from '@mui/material';

interface LobbyCardImageProps {
  status: string;
  label: string;
}

export default function MissionCardImage({ status, label }: LobbyCardImageProps) {
  const theme = useTheme();

  const statusPalette = getStatusPalette(status);

  return (
    <Box
      sx={{
        width: '88px',
        height: '100%',
        position: 'relative',
        flexShrink: 0,
        zIndex: 1,
      }}
    >
      <Box
        component="img"
        src="/images/bg-vip.png"
        alt=""
        sx={{ objectFit: 'contain' }}
      />

      {/* Status Badge */}
      <Box
        bgcolor={theme.palette.custom.tagOnCardPicBg}
        sx={{
          direction: 'rtl',
          position: 'absolute',
          top: 4,
          right: 0,
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          px: 1,
          py: 0,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        {status === LOBBY_STATUS.RUNNING && (
          <Box
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: statusPalette.dot,
            }}
          />
        )}
        <Typography variant="sub3" sx={{ color: statusPalette.color }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
}
