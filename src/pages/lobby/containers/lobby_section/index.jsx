import { Box } from '@mui/material';
import MultiPLayerLayout from '../../layout/MultiPLayerLayout';
import MultiplayerTeamSideContainer from './MultiplayerTeamSideContainer';
import BattleRoyalContainer from './BattleRoyalContainer';
import useMultiplayerTeamTypeTranslate from '@/hooks/lobby/useMultiplayerTEamTypeTranslate';
import { MULTIPLAYER_TEAM_SLOTS } from '../../_mock/multiplayer';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function LobbySection({ onSignupAttempt }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const gameMode = useMemo(
    () => searchParams.get('game_mode') || 'multiplayer',
    [searchParams],
  );

  const searchedTeamType = useMemo(
    () => searchParams.get('team_type') || 1,
    [searchParams],
  );
  const teamType = useMultiplayerTeamTypeTranslate(searchedTeamType);

  return (
    <Box style={{ marginTop: '32px', width: '100%' }}>
      {/* TEAM SIDES (Multiplayer version) */}
      {gameMode === 'multiplayer' && (
        <MultiPLayerLayout
          side1Slot={
            <MultiplayerTeamSideContainer
              teamType={teamType}
              players={MULTIPLAYER_TEAM_SLOTS[teamType].players.team1}
              onSignupAttempt={onSignupAttempt}
            />
          }
          side2Slot={
            <MultiplayerTeamSideContainer
              teamType={teamType}
              players={MULTIPLAYER_TEAM_SLOTS[teamType].players.team2}
              onSignupAttempt={onSignupAttempt}
            />
          }
        />
      )}

      {/* TEAM SIDE (Battle Royal version) */}
      {gameMode === 'battle-royal' && (
        <BattleRoyalContainer onSignupAttempt={onSignupAttempt} />
      )}
    </Box>
  );
}
