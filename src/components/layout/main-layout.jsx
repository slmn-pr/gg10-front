import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopBar from './top-bar';
import { Outlet } from 'react-router-dom';
import mainTheme from '@/theme/index.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import OfflineSnakbar from '../OfflineSnakbar';
import { useQuery } from '@tanstack/react-query';
import { getMeReq } from '@/api';
import useUserStore from '@/store/user-store';

const MainLayout = () => {
  const { setUser } = useUserStore();

  const { data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => {
      const userInfo = await getMeReq();

      if (userInfo) setUser(userInfo);
    },
    refetchInterval: 5_000, // refresh each 5 seconds
  });

  console.log('[MainLayout] data', data);

  return (
    <ThemeProvider theme={mainTheme}>
      {/* Offline Snakbar */}

      {/* Server error Snakbar */}
      {/* <ErrorSnakBar
        open={true}
        message="سرور موقتا از دسترس خارج شده،
بعد از چند دقیقه مجددا تلاش کنید"
        actionText="تلاش مجدد"
        onAction={() => {}}
        onClose={() => {}}
      /> */}

      <CssBaseline />

      <TopBar />

      <Box
        bgcolor="custom.tint0"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          // overflowX: 'hidden',
        }}
      >
        <Container
          disableGutters
          maxWidth="sm"
          sx={{
            paddingLeft: { xs: 0 },
            paddingRight: { xs: 0 },
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            // overflowX: 'hidden',
            // overflow: 'auto',
            backgroundColor: '#000',
            gap: 0.5,
          }}
        >
          <OfflineSnakbar />

          <Box component="main" sx={{ flexGrow: 1, pb: 8, px: 0 }}>
            <Outlet />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
