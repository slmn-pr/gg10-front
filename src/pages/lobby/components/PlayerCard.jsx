import { RANK_CODE_MAP } from '@/consts';
import { Box, Typography, useTheme } from '@mui/material';
import PlayerEmptyCard from './PlayerEmptyCard';

export default function PlayerCard({
  rank = 1,
  playerName = 'amir_gamer',
  isLeader = false,
  freeSlot = false,
}) {
  const rankData = RANK_CODE_MAP[rank];
  const rankTitle = rankData?.title;
  const rankColor = rankData?.color;
  const rankIcon = rankData?.icon;

  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', width: 'fit-content' }}>
      {/* Avatar */}
      {!freeSlot ? (
        <Box
          sx={{
            width: '75px',
            height: '75px',
            position: 'relative',
            borderRadius: '8px',
            border: isLeader ? `1px solid ${theme.palette.custom.tint2}` : 'none',
            boxShadow: isLeader
              ? `0px 4px 24px 1px ${theme.palette.custom.tint3}`
              : 'none',
          }}
        >
          <img
            src="/images/player_card_sample.png"
            alt="avatar"
            style={{ borderRadius: '8px' }}
          />

          {/* Rank icon */}
          <Box
            sx={{
              width: '30px',
              height: '30px',
              position: 'absolute',
              bottom: -8,
              right: -2,
            }}
          >
            {rankIcon}
          </Box>
        </Box>
      ) : (
        <PlayerEmptyCard />
      )}

      {/* Player name */}
      {!freeSlot && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="sub2"
            color={isLeader ? 'custom.tint2' : 'custom.whiteOnBg1'}
          >
            {playerName}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
