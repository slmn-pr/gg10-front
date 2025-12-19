import { Stack } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import PlayerEmptyCard from '../components/PlayerEmptyCard';

export default function TeamSideContainer() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      spacing={1}
      sx={{ width: '360px' }}
    >
      <PlayerCard />
      <PlayerEmptyCard />
      <PlayerCard />
      <PlayerCard isLeader />
      <PlayerCard />
    </Stack>
  );
}
