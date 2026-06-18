// src/pages/lobby/components/LobbyDetailView.tsx

import { Box, Button, ButtonGroup, Stack, Typography, useTheme } from '@mui/material';
import ShowLobbyIdModal from './ShowLobbyIdModal';
import StatusIcon from '@/components/icons/lobby/StatusIcon';
import { getStatusPalette } from '@/pages/home/utils';
import { useLobbyContext } from '../contexts/LobbyContext';
import { LOBBY_STATUS_TEXT } from '../constants/lobbyStatus';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import CapacityIcon from '@/components/icons/CapacityIcon';
import CustomProgressBar from '@/components/CustomProgressBar';
import { FILTER_ITEMS } from '../constants';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export default function LobbyDetailView() {
  const theme = useTheme();
  const { lobbyData } = useLobbyContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilter = searchParams.get('filter') || 'lobby';

  const progeressPlayers = useMemo(() => {
    if (!lobbyData.slots?.length) return 0;

    return lobbyData.slots
      ? Math.round(
          (lobbyData.slots.filter((s) => s.players?.length > 0).length /
            lobbyData.capacity) *
            100,
        )
      : 0;
  }, [lobbyData.slots]);

  return (
    <Box sx={{ width: '100%', px: '16px', mt: '12px' }}>
      <ShowLobbyIdModal lobbyStatus={lobbyData?.status} />

      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ direction: 'rtl' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StatusIcon color={getStatusPalette(lobbyData.status).hexColor} />
            <Typography
              variant="sub1"
              sx={{ color: getStatusPalette(lobbyData.status).color }}
            >
              وضعیت: {LOBBY_STATUS_TEXT[lobbyData.status]}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TimeIcon color={theme.palette.custom.tint1} />
            <Typography variant="sub1" color="custom.tint1">
              زمان: {lobbyData.start_time ?? '—'}
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ direction: 'rtl' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EntryFreeIcon color={theme.palette.custom.dollar} />
            <Typography variant="sub1" color="custom.dollar">
              ورودی: {lobbyData.entry_fee}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CapacityIcon color={theme.palette.custom.greyOnBg1} />
            <Typography variant="sub1" color="custom.greyOnBg1">
              ظرفیت: {lobbyData.capacity}
            </Typography>
          </Box>
        </Stack>

        <Box mt={0.25} mb={1.25}>
          {/* progress = filled slots / capacity * 100 */}
          <CustomProgressBar progress={progeressPlayers} />
        </Box>
      </Box>

      <ButtonGroup variant="outlined" aria-label="lobby filter" size="large" fullWidth>
        {FILTER_ITEMS.map((item) => (
          <Button
            fullWidth
            key={item.key}
            onClick={() => {
              const newParams = new URLSearchParams(searchParams);
              newParams.set('filter', item.key);
              setSearchParams(newParams);
            }}
            sx={{
              flex: 1,
              backgroundColor: activeFilter === item.key ? 'custom.tint1' : 'transparent',
              borderColor:
                activeFilter === item.key ? 'custom.tint2' : 'custom.greyOnBg1',
            }}
          >
            <Typography
              variant="title3"
              color={
                activeFilter === item.key
                  ? 'custom.blackOnPrimary'
                  : 'custom.whiteOnPrimary'
              }
            >
              {item.label}
            </Typography>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
