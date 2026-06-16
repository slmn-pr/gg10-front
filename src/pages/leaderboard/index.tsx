import { useState } from 'react';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';

import BottomNav from '@/components/layout/bottom-navigation.jsx';
import GameModeSelector from '@/components/game-mode-selector.jsx';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';
import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import leaderboardBanner from '@/assets/images/image 17.png';
import RankRow from './sections/RankRow';
import NotLoggedInCta from './sections/NotLoginCta';
import { GameMode } from './sections/leaderboard-types';
import GuideSheet from './sections/GuideSheet';
import { _mockRows } from './sections/_mock';
import useAuthStore from '@/store/auth-store';

export default function LeaderboardPage() {
  const [mode, setMode] = useState<GameMode>('battle-royal');
  const ModeIcon = mode === 'battle-royal' ? BattleRoyalIcon : MultiPlayerIcon;

  const loggedIn = useAuthStore((s) => s.logged_in);

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 56px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        pt: 1,
        pb: 10,
      }}
      gap={0}
      alignItems="center"
    >
      <Box
        component="img"
        src={leaderboardBanner}
        alt=""
        sx={{
          width: 'calc(100% - 32px)',
          height: 120,
          borderRadius: '8px',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      <Box sx={{ width: 'calc(100% - 32px)', mt: 3 }}>
        <GameModeSelector value={mode} onChange={setMode} />
      </Box>

      {!loggedIn && (
        <Box sx={{ mt: 3.125, width: '100%' }}>
          <NotLoggedInCta />
        </Box>
      )}

      <GuideSheet />

      <Stack sx={{ width: 'calc(100% - 32px)', mt: 4 }} gap={1}>
        {/* TODO: Add user rank row */}
        <Box sx={{ my: 1 }}>
          <RankRow rank={1} row={_mockRows[mode][0]} isUser />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            height: 32,
            px: 1.5,
            color: 'custom.grey0',
            bgcolor: 'transparent',
            direction: 'rtl',
          }}
        >
          <Typography
            variant="title3"
            color="custom.grey2"
            sx={{ width: 80, textAlign: 'right' }}
          >
            رتبه
          </Typography>

          <Typography
            variant="title3"
            color="custom.grey2"
            sx={{ width: '180px', textAlign: 'right' }}
          >
            بازیکن
          </Typography>

          <Typography variant="title3" color="custom.grey2">
            امتیاز
          </Typography>
        </Stack>
        {_mockRows[mode].map((row, index) => (
          <RankRow
            key={`${mode}-${row.player.name}`}
            row={row}
            rank={index + 1}
            isUser={index === 0}
          />
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 24 }} />
      <BottomNav />
    </Stack>
  );
}
