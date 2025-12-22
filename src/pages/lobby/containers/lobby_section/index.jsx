import { Box } from '@mui/material';
import MultiPLayerLayout from '../../layout/MultiPLayerLayout';
import MultiplayerTeamSideContainer from './MultiplayerTeamSideContainer';
import BattleRoyalContainer from './BattleRoyalContainer';
import useMultiplayerTeamTypeTranslate from '@/hooks/lobby/useMultiplayerTEamTypeTranslate';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function LobbySection() {
  const [searchParams, setSearchParams] = useSearchParams();

  // const gameMode = useMemo(
  //   () => searchParams.get('gameMode') || 'multiplayer',
  //   [searchParams],
  // );

  const gameMode = 'battle-royal';

  const searchedTeamType = useMemo(
    () => searchParams.get('team_type') || 1,
    [searchParams],
  );
  const teamType = useMultiplayerTeamTypeTranslate(searchedTeamType);

  return (
    <Box style={{ marginTop: '32px', width: '344px' }}>
      {/* TEAM SIDES (Multiplayer version) */}
      {gameMode === 'multiplayer' && (
        <MultiPLayerLayout
          side1Slot={
            <MultiplayerTeamSideContainer
              teamType={teamType}
              players={MULTIPLAYER_TEAM_SLOTS[teamType].players.team1}
            />
          }
          side2Slot={
            <MultiplayerTeamSideContainer
              teamType={teamType}
              players={MULTIPLAYER_TEAM_SLOTS[teamType].players.team2}
            />
          }
        />
      )}

      {/* TEAM SIDE (Battle Royal version) */}
      {gameMode === 'battle-royal' && <BattleRoyalContainer />}
    </Box>
  );
}
