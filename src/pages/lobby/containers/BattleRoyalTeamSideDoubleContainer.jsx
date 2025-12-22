import { Box, Stack, Typography } from '@mui/material';
import PlayerEmptyCard from '../components/PlayerEmptyCard';
import { useMemo } from 'react';
import PlayerCard from '../components/PlayerCard';

const _mock = [
  {
    label: 'Team 01',
    players: [
      { name: 'Player 01', rank: 1, isLeader: false, freeSlot: false },
      { name: 'Player 02', rank: 3, isLeader: false, freeSlot: false },
    ],
  },
  {
    label: 'Team 02',
    players: [
      { name: 'Player 03', rank: 4, isLeader: false, freeSlot: false },
      { name: 'Player 04', rank: 2, isLeader: false, freeSlot: false },
    ],
  },
  {
    label: 'Team 03',
    players: [
      { name: 'Player 05', rank: 3, isLeader: false, freeSlot: false },
      { name: 'Player 06', rank: 2, isLeader: false, freeSlot: false },
    ],
  },
  {
    label: 'Team 03',
    players: [
      { name: 'Player 03', rank: 3, isLeader: false, freeSlot: false },
      { name: 'Player 06', rank: 1, isLeader: false, freeSlot: false },
    ],
  },
];

/** In each row must contain two teams with 32px gap between them */
export default function BattleRoyalTeamSideDoubleContainer() {
  const rows = useMemo(() => {
    return _mock.reduce((acc, team, index) => {
      const rowIndex = Math.floor(index / 2);
      if (!acc[rowIndex]) {
        acc[rowIndex] = [];
      }
      acc[rowIndex].push(team);
      return acc;
    }, []);
  }, [_mock]);

  return (
    <Box>
      <Stack direction="row" gap={2} justifyContent="start" flexWrap="wrap">
        {rows.map((row, index) => (
          <Stack direction="row" gap={4} justifyContent="start" flexWrap="wrap">
            {row.map((team, index) => (
              <Box key={index}>
                <Typography variant="eng_numbers_bold" color="white">
                  {team.label}
                </Typography>
                <Stack direction="row" spacing="6px" justifyContent="center">
                  {team.players.map((player, index) => (
                    <>
                      {player.freeSlot ? (
                        <PlayerEmptyCard key={index} />
                      ) : (
                        <PlayerCard
                          key={index}
                          rank={player.rank}
                          playerName={player.name}
                          isLeader={player.isLeader}
                        />
                      )}
                    </>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
