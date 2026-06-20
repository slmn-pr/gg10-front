import { useMemo, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import BottomNav from '@/components/layout/bottom-navigation.jsx';
import GameModeSelector from '@/components/game-mode-selector.jsx';
import leaderboardBanner from '@/assets/images/image 17.png';
import RankRow from './sections/RankRow';
import NotLoggedInCta from '../../components/NotLoginCta';
import GuideSheet from './sections/GuideSheet';
import useUserStore from '@/store/user-store';
import { getLeaderboard } from '@/api';
import type { GameMode } from '@/api/leaderboard/leaderboard';

export default function LeaderboardPage() {
  const [mode, setMode] = useState<GameMode>('battle_royale');
  const loggedIn = useUserStore((s) => s.logged_in);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['leaderboard', mode],
    queryFn: () => getLeaderboard({ mode, limit: 100 }),
  });

  const rows = data?.rows ?? [];
  const myRow = data?.me ?? null;

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
        {/* Current user's row, if authenticated */}
        {myRow && (
          <Box sx={{ my: 1 }}>
            <RankRow rank={myRow.rank} row={myRow} isUser />
          </Box>
        )}

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

        {isLoading && (
          <Typography variant="sub1" color="custom.grey2" textAlign="center" mt={2}>
            در حال بارگذاری...
          </Typography>
        )}

        {isError && (
          <Typography variant="sub1" color="error" textAlign="center" mt={2}>
            خطا در دریافت لیدربورد
          </Typography>
        )}

        {!isLoading &&
          !isError &&
          rows.map((row) => (
            <RankRow key={row.player.id} row={row} rank={row.rank} isUser={false} />
          ))}
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 24 }} />
      <BottomNav />
    </Stack>
  );
}
