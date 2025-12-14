import SilverIcon from '@/components/icons/rank/SilverIcon';
import { RANK_CODE_MAP } from '@/consts';
import { Box, Typography } from '@mui/material';

export default function PlayerCard({ rank = 1, playerName = 'amir_gamer' }) {
  const rankData = RANK_CODE_MAP[rank];
  const rankTitle = rankData?.title;
  const rankColor = rankData?.color;

  return (
    <Box sx={{ position: 'relative', width: 'fit-content' }}>
      {/* Avatar */}
      <Box sx={{ width: '75px', height: '75px', position: 'relative' }}>
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
            right: 0,
          }}
        >
          <SilverIcon />
          {/* <img src="/images/rank_icon_sample.png" alt="rank icon" /> */}
        </Box>
      </Box>

      {/* Player name */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="sub2" color="custom.whiteOnBg1">
          {playerName}
        </Typography>
      </Box>
    </Box>
  );
}
