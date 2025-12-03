import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AccessTimeRoundedIcon from '@/assets/icons/lobby-card/time.svg';
import FilterListRoundedIcon from '@/assets/icons/chips/filter.svg';
import AutoModeRoundedIcon from '@/assets/icons/chips/auto-revive.svg';
import GroupsRoundedIcon from '@/assets/icons/chips/squad.svg';
import ShieldRoundedIcon from '@/assets/icons/chips/placement.svg';
import ParaglidingRoundedIcon from '@/assets/icons/game-mode/battle-royal.svg';
import ExpandChevronIcon from '@/assets/icons/general/chevron-back.svg';
import bg1 from '@/assets/images/lobby/bg-hero.png';

import LobbyCard from '../components/lobby-card.jsx';
import UserStats from '../containers/UserStats.jsx';
import BannerSlider from '../containers/BannerSlider.jsx';

const SvgIcon = ({ src, sx, ...props }) => (
  <Box
    component="img"
    src={src}
    sx={{
      width: '1em',
      height: '1em',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...sx,
    }}
    {...props}
  />
);

const GameModeSelector = () => (
  <Stack
    direction="row"
    spacing={0}
    sx={{ mb: 2, bgcolor: '#151826', borderRadius: 3, p: 0.5 }}
  >
    <Button
      fullWidth
      variant="contained"
      startIcon={<SvgIcon src={ShieldRoundedIcon} />}
      sx={{
        bgcolor: '#FFB4AB',
        color: '#000',
        borderRadius: 2.5,
        '&:hover': { bgcolor: '#FFB4AB' },
        py: 1,
        fontSize: '1rem',
        fontWeight: 'bold',
      }}
    >
      مولتی پلیر
    </Button>
    <Button
      fullWidth
      startIcon={<SvgIcon src={ParaglidingRoundedIcon} sx={{ color: '#fff' }} />}
      sx={{
        color: '#fff',
        borderRadius: 2.5,
        py: 1,
        fontSize: '1rem',
      }}
    >
      بتل رویال
    </Button>
  </Stack>
);

const Filters = () => (
  <Stack direction="row" spacing={1} sx={{ mb: 3, overflowX: 'auto', pb: 1 }}>
    <Chip
      icon={<SvgIcon src={FilterListRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="فیلترها"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
    <Chip
      icon={<SvgIcon src={AccessTimeRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="کیلی"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
    <Chip
      icon={<SvgIcon src={AutoModeRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="اتوریوایو"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
    <Chip
      icon={<SvgIcon src={GroupsRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="اسکوادی"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
  </Stack>
);

const HomePage = () => {
  const [myLobbiesExpanded, setMyLobbiesExpanded] = React.useState(true);
  const [allLobbiesExpanded, setAllLobbiesExpanded] = React.useState(true);

  return (
    <Stack sx={{ pb: 4, px: 0 }} spacing={0.5}>
      {/* USer status */}
      <UserStats />

      {/* Banner slider */}
      <Box sx={{ p: 1, bgcolor: 'custom.bg1' }}>
        <BannerSlider />
      </Box>

      {/* Game mode selector */}
      <GameModeSelector />

      {/* Filters */}
      <Filters />

      {/* My Lobbies Section */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" fontWeight="bold">
            لابی‌های شما
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ۲ لابی
          </Typography>
        </Stack>
        <IconButton
          size="small"
          onClick={() => setMyLobbiesExpanded(!myLobbiesExpanded)}
          sx={{ color: 'text.secondary' }}
        >
          <SvgIcon
            src={ExpandChevronIcon}
            sx={{
              width: 20,
              height: 20,
              transform: myLobbiesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
        </IconButton>
      </Stack>

      {myLobbiesExpanded && (
        <>
          <LobbyCard
            title="آیزولیتد ۴۰ نفره جایگاهی"
            status="در حال ثبت نام"
            entryFee="۱۰۰,۰۰۰ تومن"
            prize="۱۰,۰۰۰,۰۰۰ تومن"
            currentPlayers={30}
            maxPlayers={40}
            isRegistered={true}
            isVip={true}
          />
          <LobbyCard
            title="آیزولیتد ۴۰ نفره جایگاهی"
            status="تکمیل ظرفیت"
            entryFee="۱۰۰,۰۰۰ تومن"
            prize="۱۰,۰۰۰,۰۰۰ تومن"
            currentPlayers={40}
            maxPlayers={40}
            isFull={true}
            isVip={false}
          />
        </>
      )}

      {/* All Lobbies Section */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2, mt: 4 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" fontWeight="bold">
            فهرست همه لابی‌ها
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ۴ لابی
          </Typography>
        </Stack>
      </Stack>

      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={30}
        maxPlayers={40}
        isVip={true}
      />
      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={35}
        maxPlayers={40}
        isVip={false}
      />
      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={38}
        maxPlayers={40}
        isVip={false}
      />
      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={25}
        maxPlayers={40}
        isVip={true}
      />
    </Stack>
  );
};

export default HomePage;
