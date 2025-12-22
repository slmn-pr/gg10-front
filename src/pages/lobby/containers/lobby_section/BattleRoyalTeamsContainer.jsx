import { Box, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import PlayerEmptyCard from '../../components/PlayerEmptyCard';
import { generateFakeBattleRoyalData } from '../../_mock/battle_royal';

export default function BattleRoyalTeamsContainer({ teamCapacity = 3 }) {
  const teamsMock = generateFakeBattleRoyalData(3, teamCapacity);

  console.log(teamsMock);

  return (
    <Stack direction="column" spacing={2} justifyContent="center">
      {teamsMock.map((team, index) => (
        <Box>
          <Typography variant="eng_numbers_bold" color="white">
            {team.label}
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            {team.players.map((player, index) => (
              <PlayerEmptyCard key={index} />
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
