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
        minHeight: '112px',

        position: 'relative',
        flexShrink: 0,
        zIndex: 1,
      }}
    >
      <img
        src="/images/player_card_sample.png"
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Status Badge */}
      <Box
        bgcolor={theme.palette.custom.tagOnCardPicBg}
        sx={{
          width: '75px',
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
        <Typography
          textAlign="center"
          variant="sub3"
          component="p"
          sx={{ color: '#066E45', textAlign: 'center', width: '100%' }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}
