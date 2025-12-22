import { Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { generateFakeBattleRoyalData } from '../_mock/battle_royal';
import PlayerEmptyCard from '../components/PlayerEmptyCard';

const _mock = generateFakeBattleRoyalData(3, 2);

export default function BattleRoyalTeamsContainer({ teamCapacity = 2, teams = _mock }) {
  // Slice the teams base on each team capacity
  const teamsCustom = useMemo(() => {
    return Array.from({ length: teamCapacity }, (_, index) => {
      return {
        label: `Team ${index + 1}`,
        players: [],
      };
    });
  }, [teamCapacity]);

  return (
    <Grid container spacing={2}>
      {teamsCustom.map((team, index) => (
        <Stack direction="row" spacing={2}>
          {/* <Typography variant="h6">{team.label}</Typography> */}

          <PlayerEmptyCard />

          {/* <BattleRoyalTeamSideSoloContainer /> */}
        </Stack>
      ))}
    </Grid>
  );
}
