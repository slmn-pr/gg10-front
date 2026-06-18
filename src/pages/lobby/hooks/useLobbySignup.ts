import useAuthStore from '@/store/auth-store';
import { useState } from 'react';
import { VALIDATION_RESULT } from '../constants';
import type { LobbyDetailResponse } from '@/api/lobbies/lobbies';

type ValidationResult = {
  valid: boolean;
  reason: string;
};

export default function useLobbySignup(lobbyData: LobbyDetailResponse) {
  const isAuthenticated = useAuthStore(
    (state) => state.logged_in && !!state.access_token,
  );
  const playerRank = useAuthStore((state) => state.player_rank);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showNotAllowedModal, setShowNotAllowedModal] = useState(false);

  const validateSignup = (): ValidationResult => {
    if (!isAuthenticated) {
      return { valid: false, reason: VALIDATION_RESULT.NOT_LOGGED_IN };
    }

    const allowedRanks = lobbyData?.allowed_ranks ?? [];
    if (allowedRanks.length > 0 && playerRank !== null) {
      const rankAllowed = allowedRanks.some((rank) => rank === playerRank);
      if (!rankAllowed) {
        return { valid: false, reason: VALIDATION_RESULT.RANK_NOT_ALLOWED };
      }
    }

    return { valid: true, reason: VALIDATION_RESULT.SUCCESS };
  };

  const handleSignupAttempt = (): void => {
    const validation = validateSignup();
    if (!validation.valid) {
      switch (validation.reason) {
        case VALIDATION_RESULT.NOT_LOGGED_IN:
          setShowLoginModal(true);
          break;
        case VALIDATION_RESULT.RANK_NOT_ALLOWED:
          setShowNotAllowedModal(true);
          break;
        default:
          break;
      }
      return;
    }
    // TODO: actual signup logic
    console.log('proceed with signup');
  };

  return {
    handleSignupAttempt,
    showLoginModal,
    setShowLoginModal,
    showNotAllowedModal,
    setShowNotAllowedModal,
  };
}
