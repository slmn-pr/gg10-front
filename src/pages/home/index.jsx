import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import ExpandChevronIcon from '@/assets/icons/general/chevron-back.svg';

import LobbyCard from './components/lobby-card.jsx';
import UserStats from './containers/UserStats.jsx';
import BannerSlider from './containers/BannerSlider.jsx';
import GameModeSelector from './components/GameModeTab.jsx';
import HomeFilters from './containers/HomeFilters/index.jsx';
import ChevronUpIcon from '@/components/icons/ChevronUp.jsx';
import LobbyCardHeader from './components/LobbyCardHeader.jsx';
import { useTheme } from '@mui/material';

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

const HomePage = () => {
  const [myLobbiesExpanded, setMyLobbiesExpanded] = React.useState(true);
  const [allLobbiesExpanded, setAllLobbiesExpanded] = React.useState(true);

  const theme = useTheme();

  return (
    <Stack sx={{ pb: 4, px: 0 }} spacing={0.5}>
      {/* USer status */}
      <Box sx={{ px: 2, py: 1, bgcolor: 'custom.bg1' }}>
        <UserStats />
      </Box>

      {/* Banner slider */}
      <Box sx={{ p: 1, bgcolor: 'custom.bg1' }}>
        <BannerSlider />
      </Box>

      <Stack bgcolor="custom.bg1" px={2} borderRadius={1} sx={{ width: '100%' }}>
        {/* Sticky Header */}
        <Box
          bgcolor={theme.palette.custom.bg1}
          sx={{
            position: 'sticky',
            top: 60,
            zIndex: 999,
            pt: 1,
            width: '100%',
          }}
        >
          {/* Game Mode */}
          <Box px={2} mb={1}>
            <GameModeSelector />
          </Box>

          {/* Filters */}
          <Box px={2}>
            <HomeFilters />
          </Box>
        </Box>

        {/* Section Title – dynamic */}
        <Box
          px={2}
          pb={1}
          // sx={{ position: 'sticky', top: 120, zIndex: 1000 }}
          bgcolor={theme.palette.custom.bg1}
        >
          <LobbyCardHeader
            name={myLobbiesExpanded ? 'لابی‌های شما' : 'فهرست همه لابی‌ها'}
            title={myLobbiesExpanded ? '۲ لابی' : '۴ لابی'}
            onExpand={() => setMyLobbiesExpanded(!myLobbiesExpanded)}
          />
        </Box>
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
        <Box>
          <LobbyCardHeader name="فهرست همه لابی‌ها" title="۴ لابی" />
        </Box>

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
    </Stack>
  );
};

export default HomePage;
