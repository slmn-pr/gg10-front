import { Stack } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import PlayerEmptyCard from '../components/PlayerEmptyCard';
import { MULTIPLAYER_TEAM_SLOTS } from '../_mock/multiplayer';
import { useMemo } from 'react';

/** This container handle the multi player team side layout
 * There are varius type of team slots:
 * 1. 1V1
 * 2. 2V2
 * 3. 3V3
 * 4. 4V4
 * 5. 5V5
 * 6. 6V6
 * 7. 7V7
 * 8. 8V8
 * 9. 9V9
 * 10. 10V10
 *
 * Imprtant: Each row should keep max 4 player cards.
 * @param {string} teamType - The type of team slot.
 * @param {Array} players - The players array.
 */
export default function MultiplayerTeamSideContainer({ players = [] }) {
  const playersCount = useMemo(() => players.length, [players]);

  // slice the player in rows of 4 records
  const playersRows = useMemo(() => {
    return players.reduce((acc, player, index) => {
      const rowIndex = Math.floor(index / 4);
      if (!acc[rowIndex]) {
        acc[rowIndex] = [];
      }
      acc[rowIndex].push(player);
      return acc;
    }, []);
  }, [players]);

  return (
    <Stack spacing={2}>
      {/* {JSON.stringify(playersRows)} */}
      {playersRows.map((row, index) => (
        <>
          <Stack
            direction="row"
            // flexWrap="wrap"
            spacing={1}
            justifyContent="center"
            sx={{ width: '100%', mx: 'auto' }}
          >
            {row.map((player) => (
              <PlayerCard key={player.name} {...player} />
            ))}
          </Stack>
        </>
      ))}
    </Stack>
  );
}
