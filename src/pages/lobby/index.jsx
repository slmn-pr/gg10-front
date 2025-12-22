import CustomProgressBar from '@/components/CustomProgressBar';
import ChevronForwardIcon from '@/components/icons/ChevronForward';
import ShareIcon from '@/components/icons/ShareIcon';
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useMemo, useState } from 'react';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import CapacityIcon from '@/components/icons/CapacityIcon';
import StatusIcon from '@/components/icons/lobby/StatusIcon';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import MultiPLayerLayout from './layout/MultiPLayerLayout';
import { MULTIPLAYER_TEAM_SLOTS } from './_mock/multiplayer';
import MultiplayerTeamSideContainer from './containers/MultiplayerTeamSideContainer';
import { useSearchParams } from 'react-router-dom';
import useMultiplayerTeamTypeTranslate from '@/hooks/lobby/useMultiplayerTEamTypeTranslate';
import BattleRoyalTeamSideContainer from './containers/BattleRoyalTeamSideSoloContainer';
import BattleRoyalContainer from './containers/BattleRoyalContainer';
// import topImage from '@/assets/images/lobby/top-image.png';

const filterItems = [
  { key: 'results', label: 'نتایج' },
  { key: 'rewards', label: 'جوایز' },
  { key: 'rules', label: 'قوانین' },
  { key: 'lobby', label: 'لابی' },
];

export default function LobbyPage() {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  // const gameMode = useMemo(
  //   () => searchParams.get('gameMode') || 'multiplayer',
  //   [searchParams],
  // );

  const gameMode = 'battle-royal';

  const [activeFilter, setActiveFilter] = useState('lobby');

  const searchedTeamType = useMemo(
    () => searchParams.get('team_type') || 1,
    [searchParams],
  );
  const teamType = useMultiplayerTeamTypeTranslate(searchedTeamType);

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

          <IconButton>
            <ShareIcon color={theme.palette.custom.iconsWhite} />
          </IconButton>
        </Stack>
      </Box>

      <Box sx={{ width: '344px', mx: 'auto' }}>
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
        {gameMode === 'battle-royal' && <BattleRoyalContainer  />}
      </Box>

      {/* <Typography variant="h1">This is lobby page</Typography> */}
    </Box>
  );
}
