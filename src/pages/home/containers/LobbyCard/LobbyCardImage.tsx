import GoldSmallIcon from '@/components/icons/rank/GoldSmallIcon';
import LegendSmallIcon from '@/components/icons/rank/LegendSmallIcon';
import SilverSmallIcon from '@/components/icons/rank/SilverSmallIcon';
import { LOBBY_STATUS } from '@/pages/lobby/constants/lobbyStatus';
import { alpha, Box, Stack, Typography, useTheme } from '@mui/material';

import vipBg from '@/assets/images/Lobbies card avatar.png';
import { getStatusPalette } from '../../utils';
import { LobbyStatus } from '@/api/lobbies/lobbies';

interface LobbyCardImageProps {
  status: LobbyStatus;
}

export default function LobbyCardImage({ status }: LobbyCardImageProps) {
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
        src={vipBg}
        alt=""
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          {status}
        </Typography>
      </Box>

      {/* Rank icons */}
      <Stack
        direction="row"
        spacing={-1.5}
        bgcolor={alpha(theme.palette.custom.glassOnCards, 0.5)}
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SilverSmallIcon />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <GoldSmallIcon />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LegendSmallIcon />
        </Box>
      </Stack>
    </Box>
  );
}
