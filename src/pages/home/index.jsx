import { useEffect, useRef, useState } from 'react';
import { Box, Stack, useTheme } from '@mui/material';

import UserStats from './containers/UserStats.jsx';
import BannerSlider from './containers/BannerSlider.jsx';
import GameModeSelector from './components/GameModeTab.jsx';
import HomeFilters from './containers/HomeFilters/index.jsx';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import LobbiesAccordionContainer from './containers/LobbiesAccordionContainer.js';

const HomePage = () => {
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

      {/* Game mode + Stickey header */}
      <Stack
        bgcolor="custom.black"
        // px={2}
        borderRadius={1}
        spacing={1}
        sx={{ width: '100%' }}
      >
        {/* Game Mode */}
        <Box mb={1} px={2}>
          <GameModeSelector />
        </Box>

        {/* Sticky Header */}
        <Box
          ref={stickyHeaderRef}
          bgcolor={theme.palette.custom.bg1}
          sx={{
            position: 'sticky',
            top: 56,
            zIndex: 999,
            pt: 1,
            width: '100%',
          }}
        >
          <HomeFilters />
        </Box>

        <Box>
          <LobbiesAccordionContainer stickyHeaderHeight={stickyHeaderHeight} />
        </Box>
      </Stack>

      <BottomNav />
    </Stack>
  );
};

export default HomePage;
