import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandChevronIcon from '@/assets/icons/general/chevron-back.svg';

import LobbyCard from './components/lobby-card.jsx';
import UserStats from './containers/UserStats.jsx';
import BannerSlider from './containers/BannerSlider.jsx';
import GameModeSelector from './components/GameModeTab.jsx';
import HomeFilters from './containers/HomeFilters/index.jsx';
import ChevronUpIcon from '@/components/icons/ChevronUp.jsx';
import LobbyCardHeader from './components/LobbyCardHeader.jsx';
import { useTheme } from '@mui/material';
import BottomNav from '@/components/layout/bottom-navigation.jsx';

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
  const [myLobbiesExpanded, setMyLobbiesExpanded] = useState(true);
  const [allLobbiesExpanded, setAllLobbiesExpanded] = useState(true);
  const stickyHeaderRef = useRef(null);
  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);

  const theme = useTheme();

  // Calculate sticky header height
  useEffect(() => {
    const updateStickyHeaderHeight = () => {
      if (stickyHeaderRef.current) {
        setStickyHeaderHeight(stickyHeaderRef.current.offsetHeight);
      }
    };

    updateStickyHeaderHeight();

    // Use ResizeObserver to track height changes
    const resizeObserver = new ResizeObserver(() => {
      updateStickyHeaderHeight();
    });

    if (stickyHeaderRef.current) {
      resizeObserver.observe(stickyHeaderRef.current);
    }

    window.addEventListener('resize', updateStickyHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateStickyHeaderHeight);
    };
  }, []);

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

      <Stack
        bgcolor="custom.black"
        // px={2}
        borderRadius={1}
        spacing={1}
        sx={{ width: '100%' }}
      >
        {/* Sticky Header */}
        <Box
          ref={stickyHeaderRef}
          bgcolor={theme.palette.custom.bg1}
          sx={{
            position: 'sticky',
            top: 56,
            zIndex: 999,
            pt: 1,
            // px: 2,
            width: '100%',
          }}
        >
          {/* Game Mode */}
          <Box mb={1} px={2}>
            <GameModeSelector />
          </Box>

          {/* Filters */}
          <Box>
            <HomeFilters />
          </Box>
        </Box>

        <Box>
          {/* My Lobbies Accordion */}
          <Accordion
            expanded={myLobbiesExpanded}
            onChange={(e, expanded) => setMyLobbiesExpanded(expanded)}
            sx={{
              bgcolor: 'transparent',
              boxShadow: 'none',
              '&:before': { display: 'none' },
              '&.Mui-expanded': { margin: 0 },
              '& .MuiAccordionDetails-root': {
                px: 0,
                pb: 0,
              },
              '& .MuiAccordionSummary-root': {
                minHeight: 'auto',
                px: 0,
                py: 1,
                bgcolor: theme.palette.custom.bg1,
                position: 'sticky',
                top: 56 + stickyHeaderHeight,
                zIndex: 998,
                '&.Mui-expanded': {
                  minHeight: 'auto',
                },
              },
            }}
          >
            <AccordionSummary
              expandIcon={false}
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                },
              }}
            >
              <LobbyCardHeader
                name="لابی های شما"
                title="4 لابی"
                expandIcon={
                  <IconButton
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      transform: myLobbiesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <ChevronUpIcon />
                  </IconButton>
                }
              />
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
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
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* All Lobbies Accordion */}
          <Accordion
            expanded={allLobbiesExpanded}
            onChange={(e, expanded) => setAllLobbiesExpanded(expanded)}
            sx={{
              bgcolor: 'transparent',
              boxShadow: 'none',
              '&:before': { display: 'none' },
              '&.Mui-expanded': { margin: 0 },
              '& .MuiAccordionDetails-root': {
                px: 0,
                pb: 0,
              },
              '& .MuiAccordionSummary-root': {
                minHeight: 'auto',
                px: 0,
                py: 1,
                bgcolor: theme.palette.custom.bg1,
                position: 'sticky',
                top: 56 + stickyHeaderHeight,
                zIndex: 998,
                '&.Mui-expanded': {
                  minHeight: 'auto',
                },
              },
            }}
          >
            <AccordionSummary
              expandIcon={false}
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                },
              }}
            >
              <LobbyCardHeader
                name="فهرست همه لابی‌ها"
                title="۴ لابی"
                expandIcon={
                  <IconButton
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      transform: allLobbiesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <ChevronUpIcon />
                  </IconButton>
                }
              />
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
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
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>

      <BottomNav />
    </Stack>
  );
};

export default HomePage;
