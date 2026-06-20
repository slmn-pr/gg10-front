import { Box, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import type { LeaderboardRow } from '@/api/leaderboard/leaderboard';
import PlayerRankMedal from '../components/PlayerRankMedal';
import { getRankByPoints } from '@/utils/rankTier';

interface RankRowProps {
  row: LeaderboardRow;
  rank: number;
  isUser?: boolean;
}

export default function RankRow({ row, rank, isUser }: RankRowProps) {
  const isTop3 = useMemo(() => rank <= 3, [rank]);
  const rankInfo = useMemo(() => getRankByPoints(row.score), [row.score]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        bgcolor={!isUser ? 'custom.secondaryBg' : 'custom.shade2'}
        dir="rtl"
        sx={{ px: '16px', py: '12px', borderRadius: '8px' }}
        gap={2}
      >
        {/* Medal section */}
        <Box
          sx={{
            width: '31px',
            height: '27px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isTop3 && <PlayerRankMedal rank={rank} />}
          {!isTop3 && (
            <Typography
              variant="sub1"
              color="custom.grey1"
              sx={{ fontFamily: 'Russo One' }}
            >
              #{rank}
            </Typography>
          )}
        </Box>

        {/* Player name & avatar */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ width: '250px' }}
          gap={1}
        >
          <Box
            component={row.player.avatar ? 'img' : 'div'}
            src={row.player.avatar ?? undefined}
            sx={{
              width: '40px',
              height: '40px',
              border: '1px solid #fff',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
          <Typography variant="sub1" color="white">
            {row.player.name}
          </Typography>
        </Stack>

        {/* Score */}
        <Stack direction="row" gap={0.25} alignItems="center">
          <Typography variant="sub1" color="white">
            {row.score}
          </Typography>
          {rankInfo.icon}
        </Stack>
      </Stack>
    </Box>
  );
}
