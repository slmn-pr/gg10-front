// src/pages/lobby/LobbyPageContent.jsx

import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useLobbyContext } from './contexts/LobbyContext';
import LobbySection from './containers/lobby_section';
import ResultsSection from './containers/result_section';
import RewardsSection from './containers/rewards_section';
import RulesSection from './containers/rules_section';
import LoginModal from '@/components/modal/LoginModal';
import NotAllowedModal from './components/NotAllowedModal';
import useLobbySignup from './hooks/useLobbySignup';
import LobbyHeaderBar from './components/LobbyHeaderBar';
import LobbyDetailView from './components/LobbyDetailView';

export default function LobbyPageContent() {
  const [searchParams] = useSearchParams();
  const { lobbyData } = useLobbyContext();

  const {
    handleSignupAttempt,
    showLoginModal,
    setShowLoginModal,
    showNotAllowedModal,
    setShowNotAllowedModal,
  } = useLobbySignup(lobbyData);

  const activeFilter = searchParams.get('filter') || 'lobby';

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top section */}
      <LobbyHeaderBar />

      {/* Details section */}
      <LobbyDetailView />

      {/* Render selected section */}
      <Box sx={{ width: '100%', px: '16px' }}>
        {activeFilter === 'lobby' && (
          <LobbySection
            onSignupAttempt={handleSignupAttempt}
            game_mode={lobbyData.game_mode}
            team_type={lobbyData.tags}
          />
        )}
        {activeFilter === 'results' && <ResultsSection />}
        {activeFilter === 'rewards' && <RewardsSection />}
        {activeFilter === 'rules' && <RulesSection />}
      </Box>

      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <NotAllowedModal
        open={showNotAllowedModal}
        onClose={() => setShowNotAllowedModal(false)}
      />
    </Box>
  );
}
