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
import { useState, useEffect } from 'react';
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
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Handler for when user tries to sign up in lobby
  const handleSignupAttempt = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      // User is logged in, proceed with signup logic
      console.log('User is authenticated, proceed with signup');
      // TODO: Add actual signup logic here
    }
  };

  // Get filter from search params, default to 'rules'
  const activeFilter = searchParams.get('filter') || 'lobby';

  // useEffect(() => {
  //   // clea all search params
  //   setSearchParams({});
  // }, [activeFilter]);

  // when called copy lobby link in clipboard and show success mui snackbar
  const handleShare = () => {
    navigator.clipboard.writeText(lobbyData.link);
    setSnackbarOpen(true);
  };

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
            <IconButton sx={{ marginInlineEnd: 0.5 }} onClick={() => navigate('/home')}>
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
      <Box sx={{ width: '100%', px: '16px' }}>
        {/* Button */}
        <Stack justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: '12px', mx: 'auto', px: '66px', py: '4px' }}
          >
            <Typography variant="button1" color="custom.whiteOnBg2">
              نمایش آیدی و پسورد روم
            </Typography>
          </Button>
        </Stack>

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
              <StatusIcon color={theme.palette.custom.live} />
              <Typography variant="sub1" color="custom.live">
                وضعیت: {lobbyData.status}
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
          <LobbySection onSignupAttempt={handleSignupAttempt} />
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
    status: LOBBY_STATUS_TEXT[LOBBY_STATUS.IN_PROGRESS],
    gameMode: 'جایگاهی',
    teamType: '4 نفره',
    teamCapacity: 4,
  });

  // Load lobby data when lobbyId changes
  useEffect(() => {
    if (lobbyId) {
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
          gameMode: loadedLobby.gameMode,
          teamType: loadedLobby.teamType,
          teamCapacity: loadedLobby.teamCapacity,
        });
      }
    }
  }, [lobbyId]);

  return (
    <LobbyProvider key={lobbyId || 'default'} initialLobbyData={lobbyData}>
      <LobbyPageContent />
    </LobbyProvider>
  );
}
