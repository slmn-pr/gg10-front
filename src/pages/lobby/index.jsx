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
import { useEffect, useMemo, useState } from 'react';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import CapacityIcon from '@/components/icons/CapacityIcon';
import StatusIcon from '@/components/icons/lobby/StatusIcon';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import { useSearchParams } from 'react-router-dom';
import LobbySection from './containers/lobby_section';
import ResultsSection from './containers/result_section';
import RewardsSection from './containers/rewards_section';
import RulesSection from './containers/rules_section';

const filterItems = [
  { key: 'results', label: 'نتایج' },
  { key: 'rewards', label: 'جوایز' },
  { key: 'rules', label: 'قوانین' },
  { key: 'lobby', label: 'لابی' },
];

export default function LobbyPage() {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState('rules');

  const lobbyData = {
    link: 'https://www.google.com',
    name: 'Lobby name',
    time: 'امشب 23:30',
    entryFee: '100,000 تومان',
    capacity: '30/40',
    progress: 85,
    status: 'در حال برگزاری',
    gameMode: 'جایگاهی',
    teamType: '4 نفره',
    teamCapacity: 4,
  };

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
            <IconButton sx={{ marginInlineEnd: 0.5 }}>
              <ChevronForwardIcon color={theme.palette.custom.iconsWhite} />
            </IconButton>

            <Typography variant="title2" color="custom.whiteOnBg1">
              آیزولیتد 40 نفره جایگاهی
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
                وضعیت: در حال برگزاری
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TimeIcon color={theme.palette.custom.tint1} />
              <Typography variant="sub1" color="custom.tint1">
                زمان: امشب 23:30
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
                ورودی: 100,000 تومان
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CapacityIcon color={theme.palette.custom.greyOnBg1} />
              <Typography variant="sub1" color="custom.greyOnBg1">
                ظرفیت: 30/40
              </Typography>
            </Box>
          </Stack>

          <Box mt={0.25} mb={1.25}>
            <CustomProgressBar progress={85} />
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
              onClick={() => setActiveFilter(item.key)}
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
        {activeFilter === 'lobby' && <LobbySection />}

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
        <Alert
          variant="filled"
          color="success"
          sx={{ direction: 'rtl', width: '100%' }}
          icon={false}
        >
          <Typography variant="sub1" color="custom.white">
            لینک لابی کپی شد
          </Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
}
