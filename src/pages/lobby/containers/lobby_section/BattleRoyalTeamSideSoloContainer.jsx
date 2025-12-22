import { Box, Grid, Stack, Typography } from '@mui/material';
import PlayerCard from '../../components/PlayerCard';
import PlayerEmptyCard from '../../components/PlayerEmptyCard';

const _mock = [
  {
    label: 'Team 01',
    players: [{ name: 'Player 01', rank: 1, isLeader: false, freeSlot: false }],
  },

  {
    label: 'Team 02',
    players: [{ name: 'Player 02', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 03',
    players: [{ name: 'Player 03', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 04',
    players: [{ name: 'Player 04', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 05',
    players: [{ name: 'Player 05', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 06',
    players: [{ name: 'Player 01', rank: 1, isLeader: false, freeSlot: false }],
  },

  {
    label: 'Team 07',
    players: [{ name: 'Player 02', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 08',
    players: [{ name: 'Player 03', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 09',
    players: [{ name: 'Player 04', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 10',
    players: [{ name: 'Player 05', rank: 1, isLeader: false, freeSlot: false }],
  },
];

/**
 * THis component handle the battle royal team side layout for solo mode
 * Each team just have 1 player.
 * Grid the teams in rows of 4 records.
 * @param {Array} teams - The teams array.
 *
 */
export default function BattleRoyalTeamSideSoloContainer({ teams = _mock }) {
  return (
    <Box sx={{ width: '343px' }}>
      <Stack
        // spacing="14px"
        columnGap="14px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        rowGap="20px"
      >
        {teams.map((team, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            {/* Shows the team index in english number */}
            <Typography
              variant="sub2"
              color="white"
              sx={{
                position: 'absolute',
                top: '-14px',
                // transform: 'translateY(50%)',
                left: 0,
                zIndex: 99,
                fontSize: '18px',
                lineHeight: '32px',
              }}
            >
              {index + 1}
            </Typography>

            {/* Shows the player card */}
            <PlayerEmptyCard key={team.label} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
