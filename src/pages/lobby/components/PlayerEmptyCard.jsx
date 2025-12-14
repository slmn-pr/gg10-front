import { Box } from '@mui/material';

export default function PlayerEmptyCard() {
  return (
    <Box sx={{ width: '74px', height: '84px' }}>
      <img
        src="/images/lobby_player_empty.png"
        alt="player empty card"
        style={{ width: '74px', height: '84px' }}
      />
    </Box>
  );
}
