import { Box } from '@mui/material';
import MultiPLayerLayout from '../../layout/MultiPLayerLayout';
import MultiplayerTeamSideContainer from './MultiplayerTeamSideContainer';
import BattleRoyalContainer from './BattleRoyalContainer';
import useMultiplayerTeamTypeTranslate from '@/hooks/lobby/useMultiplayerTEamTypeTranslate';
import { MULTIPLAYER_TEAM_SLOTS } from '../../_mock/multiplayer';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function LobbySection({ onSignupAttempt, game_mode, team_type }) {
  const [searchParams] = useSearchParams();

  // Use game_mode and team_type from props (API/mock data) or fallback to search params
  const gameMode = useMemo(
    () => game_mode || searchParams.get('game_mode') || 'multiplayer',
    [game_mode, searchParams],
  );

  const searchedTeamType = useMemo(
    () => team_type || parseInt(searchParams.get('team_type')) || 1,
    [team_type, searchParams],
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
      {gameMode === 'battle_royale' && (
        <BattleRoyalContainer onSignupAttempt={onSignupAttempt} />
      )}
    </Box>
  );
}
