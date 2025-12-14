import { Stack } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import PlayerEmptyCard from '../components/PlayerEmptyCard';

export default function TeamSideContainer() {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly" spacing={1}>
      <PlayerCard />
      <PlayerEmptyCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </Stack>
  );
}
