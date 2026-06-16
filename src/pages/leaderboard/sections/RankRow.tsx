import { Box, Stack, Typography } from '@mui/material';
import { LeaderboardRowItem } from './leaderboard-types';
import { useMemo } from 'react';
import PlayerRankMedal from '../components/PlayerRankMedal';
import { RANK_CODE_MAP } from '@/consts';

interface RankRowProps {
  row: LeaderboardRowItem;
  rank: number;
  isUser?: boolean;
}

export default function RankRow({ row, rank, isUser }: RankRowProps) {
  const isTop3 = useMemo(() => rank <= 3, [rank]);

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

        {/* PLayer name & icon */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start "
          sx={{ width: '250px' }}
          gap={1}
        >
          {/* Avatar */}
          <Box
            sx={{
              width: '40px',
              height: '40px',
              border: '1px solid #fff',
              borderRadius: '8px',
            }}
          ></Box>

          {/* Name */}
          <Typography variant="sub1" color="white">
            {row.player.name}
          </Typography>
        </Stack>

        {/* Score */}
        <Stack direction="row" gap={0.25}>
          <Typography variant="sub1" color="white">
            {row.score}
          </Typography>
          {RANK_CODE_MAP[row.rank]?.icon}
          {/* <SilverIcon /> */}
        </Stack>
      </Stack>
    </Box>
  );
}
