import CustomProgressBar from '@/components/CustomProgressBar';
import ChevronForwardIcon from '@/components/icons/ChevronForward';
import ShareIcon from '@/components/icons/ShareIcon';
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import CapacityIcon from '@/components/icons/CapacityIcon';
import StatusIcon from '@/components/icons/lobby/StatusIcon';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import LobbySection from './containers/lobby_section';
import ResultsSection from './containers/result_section';
import RewardsSection from './containers/rewards_section';
import RulesSection from './containers/rules_section';
import { getLobbyById } from '@/pages/home/_mock.js';
import { LobbyProvider, useLobby } from './contexts/LobbyContext';
import { LOBBY_STATUS, LOBBY_STATUS_TEXT } from './constants/lobbyStatus';
import useAuthStore from '@/store/auth-store';
import LoginModal from '@/components/modal/LoginModal';
import NotAllowedModal from './components/NotAllowedModal';
import ShowLobbyIdModal from './components/ShowLobbyIdModal';
import { getStatusPalette } from '../home/utils';
import toast from 'react-hot-toast';
import CloseIcon from '@/components/icons/general/CloseIcon';
import CustomToast from '@/components/toast/CustomToast';

const filterItems = [
  { key: 'results', label: 'نتایج' },
  { key: 'rewards', label: 'جوایز' },
  { key: 'rules', label: 'قوانین' },
  { key: 'lobby', label: 'لابی' },
];

function LobbyPageContent() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { lobbyData } = useLobby();

  const isAuthenticated = useAuthStore(
    (state) => state.logged_in && !!state.access_token,
  );
  const playerRank = useAuthStore((state) => state.player_rank);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showNotAllowedModal, setShowNotAllowedModal] = useState(false);

  /**
   * Validation result types
   */
  const VALIDATION_RESULT = {
    SUCCESS: 'success',
    NOT_LOGGED_IN: 'not_logged_in',
    RANK_NOT_ALLOWED: 'rank_not_allowed',
    INSUFFICIENT_CREDIT: 'insufficient_credit', // For future use
  };

  /**
   * Validate if user can sign up for the lobby
   * @returns {Object} - { valid: boolean, reason: string }
   */
  const validateSignup = () => {
    // 1. Check if user is logged in
    if (!isAuthenticated) {
      return {
        valid: false,
        reason: VALIDATION_RESULT.NOT_LOGGED_IN,
      };
    }

    // 2. Check if player rank is allowed
    const allowedRanks = lobbyData?.allowed_ranks || [];
    if (allowedRanks.length > 0 && playerRank !== null) {
      // Check if player rank is in allowed ranks
      const rankAllowed = allowedRanks.some(
        (allowedRank) => allowedRank.rank === playerRank,
      );
      if (!rankAllowed) {
        return {
          valid: false,
          reason: VALIDATION_RESULT.RANK_NOT_ALLOWED,
        };
      }
    }

    // 3. Check user credit (placeholder for future implementation)
    // const userCredit = useAuthStore((state) => state.user_credit);
    // const entryFee = parseEntryFee(lobbyData?.entryFee);
    // if (userCredit < entryFee) {
    //   return {
    //     valid: false,
    //     reason: VALIDATION_RESULT.INSUFFICIENT_CREDIT,
    //   };
    // }

    // All validations passed
    return {
      valid: true,
      reason: VALIDATION_RESULT.SUCCESS,
    };
  };

  // Handler for when user tries to sign up in lobby
  const handleSignupAttempt = () => {
    const validation = validateSignup();

    if (!validation.valid) {
      switch (validation.reason) {
        case VALIDATION_RESULT.NOT_LOGGED_IN:
          setShowLoginModal(true);
          break;
        case VALIDATION_RESULT.RANK_NOT_ALLOWED:
          setShowNotAllowedModal(true);
          break;
        case VALIDATION_RESULT.INSUFFICIENT_CREDIT:
          // TODO: Show insufficient credit modal/message
          console.log('Insufficient credit');
          break;
        default:
          console.log('Unknown validation error');
      }
      return;
    }

    // All validations passed, proceed with signup
    console.log('User can sign up, proceed with signup logic');
    // TODO: Add actual signup logic here
  };

  // Get filter from search params, default to 'rules'
  const activeFilter = searchParams.get('filter') || 'lobby';

  // useEffect(() => {
  //   // clea all search params
  //   setSearchParams({});
  // }, [activeFilter]);

  // when called copy lobby link in clipboard and show success mui snackbar
  const handleShare = useCallback(() => {
    navigator.clipboard.writeText(lobbyData.link);
    toast.custom((t) => <CustomToast t={t} message="لینک لابی کپی شد" theme={theme} />, {
      position: 'bottom-center',
      duration: 3000,
    });
    // setSnackbarOpen(true);
  }, [lobbyData.link]);

  // Memoize navigation handler to prevent re-renders
  const handleNavigateBack = useCallback(() => {
    // Use setTimeout to defer navigation and prevent blocking
    // This allows the current render cycle to complete
    setTimeout(() => {
      navigate('/home');
    }, 0);
  }, [navigate]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top section (Lobby image) */}
      <Box sx={{ position: 'relative' }}>
        {/* Image */}
        <img src="/images/sample_lobby.png" alt="top image" />

        {/* Title */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: '36px',
            position: 'absolute',
            top: 0,
            left: 4,
            right: 0,
            bottom: 0,
            direction: 'rtl',
            padding: '0 8px',
          }}
        >
          <Stack direction="row" alignItems="center">
            <IconButton sx={{ marginInlineEnd: 0.5 }} onClick={handleNavigateBack}>
              <ChevronForwardIcon color={theme.palette.custom.iconsWhite} />
            </IconButton>

            <Typography variant="title2" color="custom.whiteOnBg1">
              {lobbyData.name}
            </Typography>
          </Stack>

          {/* Share button */}
          <IconButton onClick={handleShare}>
            <ShareIcon color={theme.palette.custom.iconsWhite} />
          </IconButton>
        </Stack>
      </Box>

      {/* BUtton & lobby details section */}
      <Box sx={{ width: '100%', px: '16px', mt: '12px' }}>
        {/* Show lobby id and password modal */}
        <ShowLobbyIdModal lobbyStatus={lobbyData?.status} />

        {/* Status section (Status & Time & Entry Fee & capacity) */}
        <Box>
          {/* Status & Time */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ direction: 'rtl' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StatusIcon color={getStatusPalette(lobbyData.status).hexColor} />
              <Typography
                variant="sub1"
                sx={{ color: getStatusPalette(lobbyData.status).color }}
              >
                وضعیت: {LOBBY_STATUS_TEXT[lobbyData.status]}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TimeIcon color={theme.palette.custom.tint1} />
              <Typography variant="sub1" color="custom.tint1">
                زمان: {lobbyData.time}
              </Typography>
            </Box>
          </Stack>

          {/* Entry Fee & capacity */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ direction: 'rtl' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EntryFreeIcon color={theme.palette.custom.dollar} />
              <Typography variant="sub1" color="custom.dollar">
                ورودی: {lobbyData.entryFee}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CapacityIcon color={theme.palette.custom.greyOnBg1} />
              <Typography variant="sub1" color="custom.greyOnBg1">
                ظرفیت: {lobbyData.capacity}
              </Typography>
            </Box>
          </Stack>

          <Box mt={0.25} mb={1.25}>
            <CustomProgressBar progress={lobbyData.progress} />
          </Box>
        </Box>

        {/* Filter buttons (Results & Rewards & Rules & Lobby) */}
        <ButtonGroup
          variant="outlined"
          color="custom.greyOnBg1"
          aria-label="Basic button group"
          sx={{ mx: 'auto' }}
          size="large"
          fullWidth
        >
          {filterItems.map((item) => (
            <Button
              fullWidth
              key={item.key}
              onClick={() => {
                const newParams = new URLSearchParams(searchParams);
                newParams.set('filter', item.key);
                setSearchParams(newParams);
              }}
              sx={{
                flex: 1,
                backgroundColor:
                  activeFilter === item.key ? 'custom.tint1' : 'transparent',
                borderColor:
                  activeFilter === item.key ? 'custom.tint2' : 'custom.greyOnBg1',
              }}
            >
              <Typography
                variant="title3"
                color={
                  activeFilter === item.key
                    ? 'custom.blackOnPrimary'
                    : 'custom.whiteOnPrimary'
                }
              >
                {item.label}
              </Typography>
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box sx={{ width: '100%', px: '16px' }}>
        {/* LOBBY SECTION  */}
        {activeFilter === 'lobby' && (
          <LobbySection
            onSignupAttempt={handleSignupAttempt}
            game_mode={lobbyData.game_mode}
            team_type={lobbyData.team_type}
          />
        )}

        {/* RESULTS SECTION */}
        {activeFilter === 'results' && <ResultsSection />}

        {/* REWARDS SECTION */}
        {activeFilter === 'rewards' && <RewardsSection />}

        {/* RULES SECTION */}
        {activeFilter === 'rules' && <RulesSection />}
      </Box>

      <Snackbar
        color="success"
        open={snackbarOpen}
        autoHideDuration={3_000} // 3 seconds
        onClose={() => setSnackbarOpen(false)}
        sx={
          {
            // width: '100%',
          }
        }
      >
        <Alert color="success" sx={{ direction: 'rtl', width: '345px' }} icon={false}>
          <Typography variant="sub1" color="custom.white">
            لینک لابی کپی شد
          </Typography>
        </Alert>
      </Snackbar>

      {/* Login modal */}
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* Not Allowed modal */}
      <NotAllowedModal
        open={showNotAllowedModal}
        onClose={() => setShowNotAllowedModal(false)}
      />
    </Box>
  );
}

export default function LobbyPage() {
  const [searchParams] = useSearchParams();
  const lobbyId = searchParams.get('lobbyId');

  // Load lobby data based on ID
  const [lobbyData, setLobbyData] = useState({
    link: 'https://www.google.com',
    name: 'آیزولیتد 40 نفره جایگاهی',
    time: 'امشب 23:30',
    entryFee: '100,000 تومان',
    capacity: '30/40',
    progress: 85,
    status: LOBBY_STATUS.REGISTERING,
    statusText: LOBBY_STATUS_TEXT[LOBBY_STATUS.IN_PROGRESS],
    gameMode: 'جایگاهی',
    teamType: '4 نفره',
    teamCapacity: 4,
    game_mode: 'multiplayer',
    team_type: 4,
    allowed_ranks: [
      { id: 4, name: 'آماتور', rank: 4 },
      { id: 3, name: 'پرو', rank: 3 },
      { id: 2, name: 'مستر', rank: 2 },
      { id: 1, name: 'لجند', rank: 1 },
    ],
  });

  // Load lobby data when lobbyId changes
  useEffect(() => {
    if (lobbyId) {
      // Use requestAnimationFrame to defer heavy state updates
      // This prevents blocking the navigation
      requestAnimationFrame(() => {
        const loadedLobby = getLobbyById(lobbyId);
        if (loadedLobby) {
          setLobbyData({
            link: loadedLobby.link,
            name: loadedLobby.title,
            time: loadedLobby.time,
            entryFee: loadedLobby.entryFee,
            capacity: loadedLobby.capacity,
            progress: loadedLobby.progress,
            status: loadedLobby.status,
            statusText: LOBBY_STATUS_TEXT[loadedLobby.status],
            gameMode: loadedLobby.gameMode,
            teamType: loadedLobby.teamType,
            teamCapacity: loadedLobby.teamCapacity,
            game_mode: loadedLobby.game_mode || 'multiplayer',
            team_type: loadedLobby.team_type || 4,
            allowed_ranks: loadedLobby.allowed_ranks || [
              { id: 4, name: 'آماتور', rank: 4 },
              { id: 3, name: 'پرو', rank: 3 },
              { id: 2, name: 'مستر', rank: 2 },
              { id: 1, name: 'لجند', rank: 1 },
            ],
          });
        }
      });
    }
  }, [lobbyId]);

  return (
    <LobbyProvider key={lobbyId || 'default'} initialLobbyData={lobbyData}>
      <LobbyPageContent />
    </LobbyProvider>
  );
}
